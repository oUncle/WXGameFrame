
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/TurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXFR1cm5UYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiZWRpdG9yIiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJtZW51IiwicHJvcGVydGllcyIsInJhZGl1cyIsImdldCIsIl9yYWRpdXMiLCJzZXQiLCJ2YWwiLCJDQ19FRElUT1IiLCJvblR1cm5DaGFuZ2UiLCJ0YXJnZXQiLCJOb2RlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJsZW4iLCJhbmdsZSIsImkiLCJ4IiwiTWF0aCIsImNvcyIsIlBJIiwieSIsInNpbiIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsaUJBQWlCLEVBQUUsSUFEZjtBQUVKQyxJQUFBQSxJQUFJLEVBQUU7QUFGRixHQUhIO0FBUUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsR0FESSxpQkFDRztBQUNILGVBQU8sS0FBS0MsT0FBWjtBQUNILE9BSEc7QUFJSkMsTUFBQUEsR0FKSSxlQUlDQyxHQUpELEVBSU07QUFDTixZQUFJLEtBQUtGLE9BQUwsS0FBaUJFLEdBQXJCLEVBQTBCO0FBQ3RCLGVBQUtGLE9BQUwsR0FBZUUsR0FBZjs7QUFDQSxjQUFJQyxTQUFKLEVBQWU7QUFDWCxpQkFBS0MsWUFBTDtBQUNIO0FBQ0o7QUFDSjtBQVhHLEtBREE7QUFjUkosSUFBQUEsT0FBTyxFQUFFLEVBZEQ7QUFlUkssSUFBQUEsTUFBTSxFQUFFZCxFQUFFLENBQUNlO0FBZkgsR0FSUDtBQTBCTEYsRUFBQUEsWUExQkssMEJBMEJTO0FBQ1YsUUFBRyxLQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZRSxRQUFaLENBQXFCQyxNQUFyQixHQUE4QixDQUFoRCxFQUFrRDtBQUM5QyxVQUFJQyxHQUFHLEdBQUcsS0FBS0osTUFBTCxDQUFZRSxRQUFaLENBQXFCQyxNQUEvQjtBQUNBLFVBQUlFLEtBQUssR0FBRyxNQUFNRCxHQUFsQjs7QUFDQSxXQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWdCQSxDQUFDLEdBQUdGLEdBQXBCLEVBQXlCRSxDQUFDLEVBQTFCLEVBQTZCO0FBQ3pCLFlBQUlDLENBQUMsR0FBRyxLQUFLZCxNQUFMLEdBQWNlLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixLQUFLLEdBQUdDLENBQVIsR0FBWUUsSUFBSSxDQUFDRSxFQUFqQixHQUFzQixHQUEvQixDQUF0QjtBQUNBLFlBQUlDLENBQUMsR0FBRyxLQUFLbEIsTUFBTCxHQUFjZSxJQUFJLENBQUNJLEdBQUwsQ0FBU1AsS0FBSyxHQUFHQyxDQUFSLEdBQVlFLElBQUksQ0FBQ0UsRUFBakIsR0FBb0IsR0FBN0IsQ0FBdEI7QUFDQSxhQUFLVixNQUFMLENBQVlFLFFBQVosQ0FBcUJJLENBQXJCLEVBQXdCTyxXQUF4QixDQUFvQ04sQ0FBcEMsRUFBc0NJLENBQXRDO0FBQ0g7QUFDSjtBQUNKO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBlZGl0b3I6IHtcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgICAgIG1lbnU6ICdUdXJuVGFibGUnXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmFkaXVzICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFkaXVzID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVHVybkNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3JhZGl1czogJycsXG4gICAgICAgIHRhcmdldDogY2MuTm9kZVxuICAgIH0sXG4gICAgXG4gICAgb25UdXJuQ2hhbmdlKCl7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gMzYwIC8gbGVuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGxlbiA7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMucmFkaXVzICogTWF0aC5jb3MoYW5nbGUgKiBpICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMucmFkaXVzICogTWF0aC5zaW4oYW5nbGUgKiBpICogTWF0aC5QSS8xODApXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24oeCx5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufSk7XG4iXX0=