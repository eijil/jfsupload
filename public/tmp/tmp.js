(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1180,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_800背景.jpg", id:"_800背景"},
		{src:"images/机场背景_.jpg", id:"机场背景"},
		{src:"images/陆运_.jpg", id:"陆运"},
		{src:"images/陆运2.jpg", id:"陆运2"},
		{src:"images/捕捞背景_.jpg", id:"捕捞背景"},
		{src:"images/特写1.jpg", id:"特写1"},
		{src:"images/特写2.jpg", id:"特写2"},
		{src:"images/飞机_.png", id:"飞机"}
	]
};



// symbols:



(lib._800背景 = function() {
	this.initialize(img._800背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,790,1180);


(lib.机场背景 = function() {
	this.initialize(img.机场背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.陆运 = function() {
	this.initialize(img.陆运);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.陆运2 = function() {
	this.initialize(img.陆运2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,404);


(lib.捕捞背景 = function() {
	this.initialize(img.捕捞背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1221);


(lib.特写1 = function() {
	this.initialize(img.特写1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1180);


(lib.特写2 = function() {
	this.initialize(img.特写2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1180);


(lib.飞机 = function() {
	this.initialize(img.飞机);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,146);


(lib.飞机_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.飞机();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,546,146);


(lib.特写背景 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.特写1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1180);


(lib.捕捞背景_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.捕捞背景();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1221);


(lib.车队2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.陆运2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,404);


(lib.车队 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.陆运();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuCwQCdiXidjIQC5CPCliPQiBC2CBCpQiyiFisCFg");
	this.shape.setTransform(5.6,5.6,0.225,0.225,-45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,11.2);


(lib.btn = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.051)").s().p("Eg+CBc/MAAAi59MB8FAAAMAAAC59g");
	this.shape.setTransform(397.1,595.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,794.2,1190.3);


(lib.机场 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.机场背景();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.空运 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// 飞机.png
	this.instance = new lib.飞机_1("synched",0);
	this.instance.setTransform(286,1171.3,1,1,0,0,0,273,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:855.3},52,cjs.Ease.get(1)).wait(2));

	// 机场背景.jpg
	this.instance_1 = new lib.机场("synched",0);
	this.instance_1.setTransform(320,650,1,1,0,0,0,320,650);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:532},52,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.特写 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// 图层 2
	this.instance = new lib.特写背景("synched",0);
	this.instance.setTransform(320,590,1,1,0,0,0,320,590);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},50).wait(1));

	// 图层 1
	this.instance_1 = new lib.特写2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1180);


(lib.捕捞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.捕捞背景_1("synched",0);
	this.instance.setTransform(320,610.5,1,1,0,0,0,320,610.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:620.3},24,cjs.Ease.get(-1)).to({y:630.5},25,cjs.Ease.get(1)).to({y:620.5},25,cjs.Ease.get(-1)).to({y:610.5},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1221);


(lib.陆运_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(7));

	// 图层 2
	this.instance = new lib.车队2("synched",0);
	this.instance.setTransform(320,980,1,1,0,0,0,320,202);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},7).wait(41));

	// 图层 1
	this.instance_1 = new lib.车队("synched",0);
	this.instance_1.setTransform(320,650,1,1,0,0,0,320,650);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:532},46,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1300);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.ceil(Math.random()*100));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118));

	// 图层 1
	this.instance = new lib.元件3("synched",0);
	this.instance.setTransform(5.6,5.6,0.429,0.429,0,0,0,5.6,5.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,alpha:0},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.产地背景 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.元件4();
	this.instance.setTransform(263.4,468.5,1,1,0,0,0,5.6,5.6);

	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(424.5,464,1,1,0,0,0,5.6,5.6);

	this.instance_2 = new lib.元件4();
	this.instance_2.setTransform(493,440.5,1,1,0,0,0,5.6,5.6);

	this.instance_3 = new lib.元件4();
	this.instance_3.setTransform(558.5,468.5,1,1,0,0,0,5.6,5.6);

	this.instance_4 = new lib.元件4();
	this.instance_4.setTransform(277.9,440.5,1,1,0,0,0,5.6,5.6);

	this.instance_5 = new lib.元件4();
	this.instance_5.setTransform(517.5,448,1,1,0,0,0,5.6,5.6);

	this.instance_6 = new lib.元件4();
	this.instance_6.setTransform(367.5,476,1,1,0,0,0,5.6,5.6);

	this.instance_7 = new lib.元件4();
	this.instance_7.setTransform(436,452.5,1,1,0,0,0,5.6,5.6);

	this.instance_8 = new lib.元件4();
	this.instance_8.setTransform(391.4,564,1,1,0,0,0,5.6,5.6);

	this.instance_9 = new lib.元件4();
	this.instance_9.setTransform(350.4,543.5,1,1,0,0,0,5.6,5.6);

	this.instance_10 = new lib.元件4();
	this.instance_10.setTransform(423.4,509,1,1,0,0,0,5.6,5.6);

	this.instance_11 = new lib.元件4();
	this.instance_11.setTransform(382.4,488.5,1,1,0,0,0,5.6,5.6);

	this.instance_12 = new lib.元件4();
	this.instance_12.setTransform(36.4,495,1,1,0,0,0,5.6,5.6);

	this.instance_13 = new lib.元件4();
	this.instance_13.setTransform(104.9,471.5,1,1,0,0,0,5.6,5.6);

	this.instance_14 = new lib.元件4();
	this.instance_14.setTransform(41.9,444.5,1,1,0,0,0,5.6,5.6);

	this.instance_15 = new lib.元件4();
	this.instance_15.setTransform(170.4,499.5,1,1,0,0,0,5.6,5.6);

	this.instance_16 = new lib.元件4();
	this.instance_16.setTransform(175.9,449,1,1,0,0,0,5.6,5.6);

	this.instance_17 = new lib.元件4();
	this.instance_17.setTransform(57.4,534.5,1,1,0,0,0,5.6,5.6);

	this.instance_18 = new lib.元件4();
	this.instance_18.setTransform(125.9,511,1,1,0,0,0,5.6,5.6);

	this.instance_19 = new lib.元件4();
	this.instance_19.setTransform(62.9,484,1,1,0,0,0,5.6,5.6);

	this.instance_20 = new lib.元件4();
	this.instance_20.setTransform(191.4,539,1,1,0,0,0,5.6,5.6);

	this.instance_21 = new lib.元件4();
	this.instance_21.setTransform(196.9,488.5,1,1,0,0,0,5.6,5.6);

	this.instance_22 = new lib.元件4();
	this.instance_22.setTransform(511.5,539,1,1,0,0,0,5.6,5.6);

	this.instance_23 = new lib.元件4();
	this.instance_23.setTransform(580,515.5,1,1,0,0,0,5.6,5.6);

	this.instance_24 = new lib.元件4();
	this.instance_24.setTransform(517,488.5,1,1,0,0,0,5.6,5.6);

	this.instance_25 = new lib.元件4();
	this.instance_25.setTransform(645.5,543.5,1,1,0,0,0,5.6,5.6);

	this.instance_26 = new lib.元件4();
	this.instance_26.setTransform(651,493,1,1,0,0,0,5.6,5.6);

	this.instance_27 = new lib.元件4();
	this.instance_27.setTransform(162.4,534.5,1,1,0,0,0,5.6,5.6);

	this.instance_28 = new lib.元件4();
	this.instance_28.setTransform(230.9,511,1,1,0,0,0,5.6,5.6);

	this.instance_29 = new lib.元件4();
	this.instance_29.setTransform(202.4,452,1,1,0,0,0,5.6,5.6);

	this.instance_30 = new lib.元件4();
	this.instance_30.setTransform(167.9,484,1,1,0,0,0,5.6,5.6);

	this.instance_31 = new lib.元件4();
	this.instance_31.setTransform(140.4,463.5,1,1,0,0,0,5.6,5.6);

	this.instance_32 = new lib.元件4();
	this.instance_32.setTransform(296.4,539,1,1,0,0,0,5.6,5.6);

	this.instance_33 = new lib.元件4();
	this.instance_33.setTransform(364.9,515.5,1,1,0,0,0,5.6,5.6);

	this.instance_34 = new lib.元件4();
	this.instance_34.setTransform(336.4,456.5,1,1,0,0,0,5.6,5.6);

	this.instance_35 = new lib.元件4();
	this.instance_35.setTransform(301.9,488.5,1,1,0,0,0,5.6,5.6);

	this.instance_36 = new lib.元件4();
	this.instance_36.setTransform(274.4,468,1,1,0,0,0,5.6,5.6);

	this.instance_37 = new lib.元件4();
	this.instance_37.setTransform(604.5,523,1,1,0,0,0,5.6,5.6);

	this.instance_38 = new lib.元件4();
	this.instance_38.setTransform(673,499.5,1,1,0,0,0,5.6,5.6);

	this.instance_39 = new lib.元件4();
	this.instance_39.setTransform(644.5,440.5,1,1,0,0,0,5.6,5.6);

	this.instance_40 = new lib.元件4();
	this.instance_40.setTransform(610,472.5,1,1,0,0,0,5.6,5.6);

	this.instance_41 = new lib.元件4();
	this.instance_41.setTransform(582.5,452,1,1,0,0,0,5.6,5.6);

	this.instance_42 = new lib.元件4();
	this.instance_42.setTransform(454.5,551,1,1,0,0,0,5.6,5.6);

	this.instance_43 = new lib.元件4();
	this.instance_43.setTransform(523,527.5,1,1,0,0,0,5.6,5.6);

	this.instance_44 = new lib.元件4();
	this.instance_44.setTransform(494.5,468.5,1,1,0,0,0,5.6,5.6);

	this.instance_45 = new lib.元件4();
	this.instance_45.setTransform(460,500.5,1,1,0,0,0,5.6,5.6);

	this.instance_46 = new lib.元件4();
	this.instance_46.setTransform(432.5,480,1,1,0,0,0,5.6,5.6);

	// 图层 1
	this.instance_47 = new lib._800背景();

	this.addChild(this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,790,1180);


(lib.产地 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// 图层 1
	this.instance = new lib.产地背景();
	this.instance.setTransform(395,590,1,1,0,0,0,395,590);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:543},73,cjs.Ease.get(0.44)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,1180);


// stage content:



(lib.海产 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn1.on('click',goNext);
		function goNext(){
			exportRoot.play();
		}
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// btn
	this.btn1 = new lib.btn();
	this.btn1.setTransform(-150,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(5));

	// 主轴
	this.instance = new lib.产地();
	this.instance.setTransform(245,590,1,1,0,0,0,395,590);

	this.instance_1 = new lib.捕捞();
	this.instance_1.setTransform(320,569.5,1,1,0,0,0,320,610.5);

	this.instance_2 = new lib.特写();
	this.instance_2.setTransform(320,590,1,1,0,0,0,320,590);

	this.instance_3 = new lib.空运();
	this.instance_3.setTransform(320,668.1,1,1,0,0,0,320,668.1);

	this.instance_4 = new lib.陆运_1();
	this.instance_4.setTransform(320,650,1,1,0,0,0,320,650);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(170,590,794.2,1190.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;var canvas, stage, exportRoot;
function init() {	canvas = document.getElementById("canvas");	images = images||{};	var loader = new createjs.LoadQueue(false);	loader.addEventListener("fileload", handleFileLoad);	loader.addEventListener("complete", handleComplete);	loader.loadManifest(lib.properties.manifest);}function handleFileLoad(evt) {	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }}function handleComplete() {	exportRoot = new lib.%E6%B5%B7%E4%BA%A7();	stage = new createjs.Stage(canvas);	stage.addChild(exportRoot);	stage.update();	stage.enableMouseOver();	createjs.Ticker.setFPS(lib.properties.fps)	createjs.Ticker.addEventListener("tick", stage)}<canvas id="canvas" width="640" height="1180" style="background-color:#FFFFFF"></canvas><div style="height:1px;overflow:hidden;"></div><script>$(function(){init();})