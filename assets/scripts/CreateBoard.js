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
            default: [],
            type: [cc.Prefab]   // use type to specify that each element in array must be type string
        },
        totalColumn: 0,
        totalRow: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.createBoard();
    },
    
    createBoard: function(){
        for (var i = 0; i < this.totalRow*this.totalColumn; i++) {
            var square = cc.instantiate(this.assetsImages[this.getRandomInt(this.assetsImages.length)]);
            this.node.addChild(square);
            // this.node.on(cc.Node.EventType.TOUCH_START, function ( event ) {
            //     console.log("this event : "+event.getDelta());
            // });
            // let eventMove = false;
        }
    },

    start: function () {
        console.log("start");

        // let { square } = null;

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // let location = event.getLocation();
            //     console.log("Touch Start "+location);
            // eventMove = true;
            // var sprites = node.getComponents(cc.Sprite);
            
        });

            // square.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
                // console.log("get card");
            // });

            this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                // let location = event.getLocation();
                //     console.log("Touch End "+location);
                // eventMove = true;
                });

        // this.node.on(cc.Node.EventType.TOUCH_START, function ( event ) {
        //     console.log('Touch Start'+event.getDelta());
        //   });

        //   this.node.on(cc.Node.EventType.TOUCH_END, function ( event ) {
        //     console.log('Touch End'+event.getDelta());
        //   });

        //   this.node.on(cc.Node.EventType.TOUCH_CANCEL, function ( event ) {
        //     console.log('Touch Cancel'+event.getDelta());
        //   });
    },

    update: function (dt) {
        console.log("update");
    },

    getRandomInt: function (max) {
        return Math.floor(Math.random() * max);
    },

    touchStart:function (event){
        console.log('Hello Mouse Down '+event.getDelta());
    },

    touchEnd: function(){

    },

    touchCancel:function(){

    },

    mouseDown: function(){

    },

    mouseMove: function(){

    },

    mouseUp: function(){

    },

    // -cc.Node.EventType.TOUCH_START  // ???????????????<br/>
	//   -cc.Node.EventType.TOUCH_Move   // ?????????????????????<br/>
	//   -cc.Node.EventType.TOUCH_END    // ????????????????????????<br/>
	//   -cc.Node.EventType.TOUCH_CANCEL // ??????????????????<br/>
	//   // ?????????????????? PC ???????????????<br/>
	//   -cc.Node.EventType.MOUSE_DOWN  // ?????????????????????<br/>
	//   -cc.Node.EventType.MOUSE_MOVE  // ???????????????????????????<br/>
	//   -cc.Node.EventType.MOUSE_ENTER // ????????????????????????<br/>
	//   -cc.Node.EventType.MOUSE_LEAVE // ????????????????????????<br/>
	//   -cc.Node.EventType.MOUSE_UP    // ??????????????????<br/>
	//   -cc.Node.EventType.MOUSE_WHEEL // ??????????????????<br/> */

    // onLoad () {
    //     //??????????????????
    //     let { carNode } = this;
    //     //???????????????????????????????????????????????????????????????
    //     let mouseDown = false;
    //     //????????????????????????????????????????????????
    //     carNode.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
    //         mouseDown = true;
    //     });
    //     //???????????????????????????????????????
    //     carNode.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
    //         if(!mouseDown) return;
    //         //???????????????????????????????????????
    //         let delta = event.getDelta();
    //         //??????????????????
    //         let minX = -carNode.parent.width / 2 + carNode.width / 2;
    //         let maxX = carNode.parent.width / 2 - carNode.width / 2;
    //         let minY = -carNode.parent.height / 2 + carNode.height / 2;
    //         let maxY = carNode.parent.height / 2 - carNode.height / 2;
    //         let moveX = carNode.x + delta.x;
    //         let moveY = carNode.y + delta.y;
    //         //??????????????????
    //         if(moveX < minX){
    //             moveX = minX;
    //         }else if(moveX > maxX){
    //             moveX = maxX;
    //         }
    //         if(moveY < minY){
    //             moveY = minY;
    //         }else if(moveY > maxY){
    //             moveY = maxY;
    //         }
    //         //??????????????????
    //         carNode.x = moveX;
    //         carNode.y = moveY;
    //     });
    //     //????????????????????????????????????
    //     carNode.on(cc.Node.EventType.MOUSE_UP, (event)=>{
    //         mouseDown = false;
    //     });
    // },

    // start () {

    // },

    // update (dt) {},
});
