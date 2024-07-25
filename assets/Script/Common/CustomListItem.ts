// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = cc._decorator;

@ccclass
export default class CustomListItem extends cc.Component {

    // @property(cc.Node)
    // itemNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    protected _index = -1;
    protected _itemData:any = null;
    protected _callBack:Function = null;
    protected _totalCountCallBack:Function = null;
    protected _selectItemCallBack:Function = null;
    protected _getSelectItemCallBack:Function = null;

    onLoad () {

    }

    start () {
        
    }

    /**
     * 默认节点高度，如果有需求，子类可重写
     */
    getItemHeight() {
        return this.node.height;
    }

    /**
     * 默认节点宽度，如果有需求，子类可重写
     */
    getItemWidth() {
        return this.node.width;
    }

    //这个接口只有 customListView 里调用，其他地方不要调用
    initItem(index:number, data:any, selectData, canTouch:boolean=true, isChecked:boolean=false) {
        if (canTouch) {
            let toggle = this.getComponent(cc.Toggle);
            if (!toggle) {
                toggle = this.addComponent(cc.Toggle);
                this.node.on('toggle', this.onTouchCustomListItem, this);
            }
            toggle.isChecked = isChecked;
            // cc.log(toggle.isChecked,'customListView,initItem index ',index," isCheck ",isChecked);
            
        }

        this.updateItem(index, data, selectData);
    }

    /**
     * 更新item， 子类实现
     * @param index 
     * @param data 
     */
    updateItem(index:number, data:any, selectData:any) {
        //子类实现
        this._index = index;
        this._itemData = data;
    }

    setIsCheckedItem(isChecked:boolean=true) {
        let toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            toggle.isChecked = isChecked;
            
            if (isChecked) {
                this.node.parent.emit('customListSelect', this._index);
            }
            // cc.log(toggle.isChecked,'customListView,setIsCheckedItem index ',this._index," isCheck ",isChecked);
        }
    }

    getIsCheckedItem() {
        let toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            return toggle.isChecked;
        }
        return false;
    }

    /**数据索引 */
    getItemIndex() {
        return this._index;
    }
    /**刷新点 数据 */
    getItemData() {
        return this._itemData;
    }

    /**
     * onTouchCustomListItem 子类实现
     * 回调的参数是 toggle 组件
     */
    onTouchCustomListItem() {
        // cc.log('onTouchCustomListItem ',this._index);
    }
    

    // update (dt) {}

    onDestroy() {
        
    }
}
