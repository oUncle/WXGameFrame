"use strict";
cc._RF.push(module, '22ed9iFedlC6qm7EBKnMIbn', 'TurnTable');
// Script/Common/TurnTable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  editor: {
    executeInEditMode: true,
    menu: 'TurnTable'
  },
  properties: {
    radius: {
      get: function get() {
        return this._radius;
      },
      set: function set(val) {
        if (this._radius !== val) {
          this._radius = val;

          if (CC_EDITOR) {
            this.onTurnChange();
          }
        }
      }
    },
    _radius: '',
    target: cc.Node
  },
  onTurnChange: function onTurnChange() {
    if (this.target && this.target.children.length > 0) {
      var len = this.target.children.length;
      var angle = 360 / len;

      for (var i = 0; i < len; i++) {
        var x = this.radius * Math.cos(angle * i * Math.PI / 180);
        var y = this.radius * Math.sin(angle * i * Math.PI / 180);
        this.target.children[i].setPosition(x, y);
      }
    }
  }
});

cc._RF.pop();