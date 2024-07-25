/**
 * File: CustomListView copy.ts
 * Created Date: 2022-04-22 13:25:39
 * Author: xiaolizi
 * -----
 * Last Modified: 2022-04-25 19:01:20
 * Modified By: xiaolizi
 * -----
 * Copyright (c) 2022 Jw Inc.
 * ------------------------------------
 * Javascript will save your soul!
 */

import GameUtils from "../GameUtils/GameUtils";
import CustomListItem from "./CustomListItem";



const { ccclass, property } = cc._decorator;

@ccclass
export default class CustomListViewGroup extends CustomListItem {

    @property(CustomListItem)
    choseItems: CustomListItem[] = [];

    // LIFE-CYCLE CALLBACKS:

    updateItem(index: number, data: any, selectData) {
        super.updateItem(index, data, selectData);

        for (let i = 0; i < this.choseItems.length; i++) {
            if (i < data.length) {
                GameUtils.getInstance().setVisible(this.choseItems[i], true);
                this.choseItems[i].updateItem(i+this.choseItems.length*index, data[i], selectData);
            } else {
                GameUtils.getInstance().setVisible(this.choseItems[i], false);
            }
        }

    }

    getItemCount() {
        return this.choseItems.length;
    }


}


