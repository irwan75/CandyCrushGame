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

    // -cc.Node.EventType.TOUCH_START  // 按下时事件<br/>
	//   -cc.Node.EventType.TOUCH_Move   // 按住移动后事件<br/>
	//   -cc.Node.EventType.TOUCH_END    // 按下后松开后事件<br/>
	//   -cc.Node.EventType.TOUCH_CANCEL // 按下取消事件<br/>
	//   // 以下事件只在 PC 平台上触发<br/>
	//   -cc.Node.EventType.MOUSE_DOWN  // 鼠标按下时事件<br/>
	//   -cc.Node.EventType.MOUSE_MOVE  // 鼠标按住移动后事件<br/>
	//   -cc.Node.EventType.MOUSE_ENTER // 鼠标进入目标事件<br/>
	//   -cc.Node.EventType.MOUSE_LEAVE // 鼠标离开目标事件<br/>
	//   -cc.Node.EventType.MOUSE_UP    // 鼠标松开事件<br/>
	//   -cc.Node.EventType.MOUSE_WHEEL // 鼠标滚轮事件<br/> */

    // onLoad () {
    //     //获取小车节点
    //     let { carNode } = this;
    //     //添加变量判断用户当前鼠标是不是处于按下状态
    //     let mouseDown = false;
    //     //当用户点击的时候记录鼠标点击状态
    //     carNode.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
    //         mouseDown = true;
    //     });
    //     //只有当用户鼠标按下才能拖拽
    //     carNode.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
    //         if(!mouseDown) return;
    //         //获取鼠标距离上一次点的信息
    //         let delta = event.getDelta();
    //         //增加限定条件
    //         let minX = -carNode.parent.width / 2 + carNode.width / 2;
    //         let maxX = carNode.parent.width / 2 - carNode.width / 2;
    //         let minY = -carNode.parent.height / 2 + carNode.height / 2;
    //         let maxY = carNode.parent.height / 2 - carNode.height / 2;
    //         let moveX = carNode.x + delta.x;
    //         let moveY = carNode.y + delta.y;
    //         //控制移动范围
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
    //         //移动小车节点
    //         carNode.x = moveX;
    //         carNode.y = moveY;
    //     });
    //     //当鼠标抬起的时候恢复状态
    //     carNode.on(cc.Node.EventType.MOUSE_UP, (event)=>{
    //         mouseDown = false;
    //     });
    // },

    // start () {

    // },

    // update (dt) {},
});
