
const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemConfigConfig {
    public static datas = {
        1: {
            id: 1,
            name: "金币",
            itemPrefabName: "gold",
            iconName: "gold",
        },
    }
}

export class ItemConfigBasic {
    /** ID */
    id: number = 0
    name: string = ""
    itemPrefabName: string = ""
    iconName: string = ""
}