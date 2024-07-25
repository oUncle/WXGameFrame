
cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {

    cc.js.mixin(sp.Skeleton.prototype, {
        update(dt) {
            // if (CC_EDITOR) return;

            if (CC_EDITOR) {
                cc.engine._animatingInEditMode = 1;
                cc.engine.animatingInEditMode = 1;
            }

            if (this.paused) return;

            dt *= this.timeScale * sp.timeScale;

            if (this.isAnimationCached()) {

                // Cache mode and has animation queue.
                if (this._isAniComplete) {
                    if (this._animationQueue.length === 0 && !this._headAniInfo) {
                        let frameCache = this._frameCache;
                        if (frameCache && frameCache.isInvalid()) {
                            frameCache.updateToFrame();
                            let frames = frameCache.frames;
                            this._curFrame = frames[frames.length - 1];
                        }
                        return;
                    }
                    if (!this._headAniInfo) {
                        this._headAniInfo = this._animationQueue.shift();
                    }
                    this._accTime += dt;
                    if (this._accTime > this._headAniInfo.delay) {
                        let aniInfo = this._headAniInfo;
                        this._headAniInfo = null;
                        this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
                    }
                    return;
                }

                this._updateCache(dt);
            } else {
                this._updateRealtime(dt);
            }
        },
        makeSkinIno(sf) {
            let texture = sf.getTexture()
            let rect = sf.getRect()
            let origSize = sf.getOriginalSize()
            let offset = sf.getOffset()
            let rotate = sf.isRotated()

            // 匹配原生端字段名
            rect.w = rect.width
            rect.h = rect.height

            let info = {
                rect: rect,
                origSize: origSize,
                offset: cc.v2(
                    (origSize.width - rect.width) * 0.5 + offset.x,
                    (origSize.height - rect.height) * 0.5 + offset.y
                ),
                degrees: rotate ? 270 : 0,
                texture: texture,
            }

            return info
        },
        //局部换装
        changeSlotSkin(slotName, sf) {
            let skinInfo = this.makeSkinIno(sf);
            if (cc.sys.isNative) {
                let texture = skinInfo.texture;
                const spineSkeletonData = sp.SkeletonData.prototype;
                const textureIdx = spineSkeletonData.recordTexture(texture);
                const spTex = new middleware.Texture2D();
                // spTex.setRealTexture(tex2d);
                spTex.setRealTextureIndex(textureIdx);
                spTex.setPixelsHigh(texture.height);
                spTex.setPixelsWide(texture.width);
                spTex.setNativeTexture(texture.getImpl());
                if (this._nativeSkeleton) {
                    this._nativeSkeleton.updateRegion(slotName, spTex, skinInfo.rect, skinInfo.origSize, skinInfo.offset, skinInfo.degrees)
                }
            } else {
                const slot = this.findSlot(slotName);
                if (!slot) return;
                let attachment = slot.getAttachment();

                if (!attachment) return;
                const isMesh = attachment instanceof sp.spine.MeshAttachment;
                const isRegion = attachment instanceof sp.spine.RegionAttachment;
                if (!isMesh && !isRegion) return;
                attachment = slot.getAttachment().copy();
                attachment.name = slotName; // + '_copy';

                let texture = skinInfo.texture;
                let rect = skinInfo.rect
                let origSize = skinInfo.origSize
                let offset = skinInfo.offset
                let degrees = skinInfo.degrees

                const tex2dW = rect.width;
                const tex2dH = rect.height;
                const skelTex = new sp.SkeletonTexture({ width: tex2dW, height: tex2dH });
                skelTex.setRealTexture(texture);

                const region = new sp.spine.TextureAtlasRegion();
                region.width = tex2dW
                region.height = tex2dH
                region.originalWidth = origSize.width
                region.originalHeight = origSize.height
                region.offsetX = offset.x
                region.offsetY = offset.y

                if (degrees != 0) {
                    region.u = rect.x / texture.width
                    region.v = rect.y / texture.height
                    region.u2 = (rect.x + tex2dH) / texture.width
                    region.v2 = (rect.y + tex2dW) / texture.height
                } else {
                    region.u = rect.x / texture.width
                    region.v = rect.y / texture.height
                    region.u2 = (rect.x + tex2dW) / texture.width
                    region.v2 = (rect.y + tex2dH) / texture.height
                }
                region.texture = skelTex;
                region.renderObject = region;
                region.page = attachment.region.page;

                attachment.region = region;
                attachment.width = tex2dW;
                attachment.height = tex2dH;
                if (isMesh) {
                    attachment.updateUVs();
                } else if (isRegion) {
                    attachment.setRegion(region);
                    let uvs = attachment.uvs;
                    if (degrees == 90) {
                        uvs[2] = region.u;
                        uvs[3] = region.v2;
                        uvs[4] = region.u;
                        uvs[5] = region.v;
                        uvs[6] = region.u2;
                        uvs[7] = region.v;
                        uvs[0] = region.u2;
                        uvs[1] = region.v2;
                    } else if (degrees == 270) {
                        uvs[6] = region.u;
                        uvs[7] = region.v2;
                        uvs[0] = region.u;
                        uvs[1] = region.v;
                        uvs[2] = region.u2;
                        uvs[3] = region.v;
                        uvs[4] = region.u2;
                        uvs[5] = region.v2;
                    } else {
                        uvs[0] = region.u;
                        uvs[1] = region.v2;
                        uvs[2] = region.u;
                        uvs[3] = region.v;
                        uvs[4] = region.u2;
                        uvs[5] = region.v;
                        uvs[6] = region.u2;
                        uvs[7] = region.v2;
                    }
                    attachment.updateOffset()
                }
                slot.setAttachment(attachment);
            }
        },
        // 隐藏某个slot
        setSlotVisible(slotName, visible) {
            if (this._nativeSkeleton) {
                this._nativeSkeleton.setSlotVisible(slotName, visible);
            }
        },
        // 隐藏某个bone
        setBoneVisible(name, visible) {
            if (this._nativeSkeleton) {
                this._nativeSkeleton.setBoneVisible(name, visible);
            }
        }
    })
})
