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
        // assetsImages: {
        //     default: [],
        //     type: [cc.Node]   // use type to specify that each element in array must be type string
        // },
        assetsImages: {
            default: null,
            type: cc.Prefab   // use type to specify that each element in array must be type string
        },
        totalColumn: 0,
        totalRow: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.createBoard();
    },
    
    createBoard: function(){
        for (var i = 0; i < this.totalRow; i++) {
            var newReel = cc.instantiate(this.assetsImages);
            this.node.addChild(newReel);
        }
    },

    start: function () {
        console.log("start");
        
    },

    update: function (dt) {
        console.log("update");
    },

    getRandomInt: function (max) {
        return Math.floor(Math.random() * max);
    }
});
