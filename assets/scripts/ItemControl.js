// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log("this node : "+this.node.name);
    },

    start () {
        
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, function ( event ) {
        //     console.log('Hello Mouse Down '+event.getDelta());
        //   });
        //   this.node.on(cc.Node.EventType.MOUSE_MOVE, function ( event ) {
        //     console.log('Hello Mouse Up '+event.getDelta());
        //   });
        //   this.node.on(cc.Node.EventType.MOUSE_DOWN, function ( event ) {
        //     console.log('Hello Mouse Up '+event.getDelta());
        //   });
    },

    // update (dt) {},
});
