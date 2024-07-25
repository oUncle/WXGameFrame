"use strict";
cc._RF.push(module, 'b3ee8wnObtHVbVVbFY8a+mj', 'SkeletonExt');
// Script/plugins/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
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
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
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
    makeSkinIno: function makeSkinIno(sf) {
      var texture = sf.getTexture();
      var rect = sf.getRect();
      var origSize = sf.getOriginalSize();
      var offset = sf.getOffset();
      var rotate = sf.isRotated(); // 匹配原生端字段名

      rect.w = rect.width;
      rect.h = rect.height;
      var info = {
        rect: rect,
        origSize: origSize,
        offset: cc.v2((origSize.width - rect.width) * 0.5 + offset.x, (origSize.height - rect.height) * 0.5 + offset.y),
        degrees: rotate ? 270 : 0,
        texture: texture
      };
      return info;
    },
    //局部换装
    changeSlotSkin: function changeSlotSkin(slotName, sf) {
      var skinInfo = this.makeSkinIno(sf);

      if (cc.sys.isNative) {
        var texture = skinInfo.texture;
        var spineSkeletonData = sp.SkeletonData.prototype;
        var textureIdx = spineSkeletonData.recordTexture(texture);
        var spTex = new middleware.Texture2D(); // spTex.setRealTexture(tex2d);

        spTex.setRealTextureIndex(textureIdx);
        spTex.setPixelsHigh(texture.height);
        spTex.setPixelsWide(texture.width);
        spTex.setNativeTexture(texture.getImpl());

        if (this._nativeSkeleton) {
          this._nativeSkeleton.updateRegion(slotName, spTex, skinInfo.rect, skinInfo.origSize, skinInfo.offset, skinInfo.degrees);
        }
      } else {
        var slot = this.findSlot(slotName);
        if (!slot) return;
        var attachment = slot.getAttachment();
        if (!attachment) return;
        var isMesh = attachment instanceof sp.spine.MeshAttachment;
        var isRegion = attachment instanceof sp.spine.RegionAttachment;
        if (!isMesh && !isRegion) return;
        attachment = slot.getAttachment().copy();
        attachment.name = slotName; // + '_copy';

        var _texture = skinInfo.texture;
        var rect = skinInfo.rect;
        var origSize = skinInfo.origSize;
        var offset = skinInfo.offset;
        var degrees = skinInfo.degrees;
        var tex2dW = rect.width;
        var tex2dH = rect.height;
        var skelTex = new sp.SkeletonTexture({
          width: tex2dW,
          height: tex2dH
        });
        skelTex.setRealTexture(_texture);
        var region = new sp.spine.TextureAtlasRegion();
        region.width = tex2dW;
        region.height = tex2dH;
        region.originalWidth = origSize.width;
        region.originalHeight = origSize.height;
        region.offsetX = offset.x;
        region.offsetY = offset.y;

        if (degrees != 0) {
          region.u = rect.x / _texture.width;
          region.v = rect.y / _texture.height;
          region.u2 = (rect.x + tex2dH) / _texture.width;
          region.v2 = (rect.y + tex2dW) / _texture.height;
        } else {
          region.u = rect.x / _texture.width;
          region.v = rect.y / _texture.height;
          region.u2 = (rect.x + tex2dW) / _texture.width;
          region.v2 = (rect.y + tex2dH) / _texture.height;
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
          var uvs = attachment.uvs;

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

          attachment.updateOffset();
        }

        slot.setAttachment(attachment);
      }
    },
    // 隐藏某个slot
    setSlotVisible: function setSlotVisible(slotName, visible) {
      if (this._nativeSkeleton) {
        this._nativeSkeleton.setSlotVisible(slotName, visible);
      }
    },
    // 隐藏某个bone
    setBoneVisible: function setBoneVisible(name, visible) {
      if (this._nativeSkeleton) {
        this._nativeSkeleton.setBoneVisible(name, visible);
      }
    }
  });
});

cc._RF.pop();