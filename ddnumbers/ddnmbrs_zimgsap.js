(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Nums = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wrng:1,rght:49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if (window.parent.second<0) {
		gsap.from(this, 1, {scaleX:0, scaleY:0, ease:Back.easeOut});
		}
		
		this.ntxt.text=this.name.charAt(4);
		this.ntxt.color="#660000";
		var targarr = [this.parent.targ1, this.parent.targ2, this.parent.targ3, this.parent.targ4, this.parent.targ5, this.parent.targ6, this.parent.targ7, this.parent.targ8, this.parent.targ9];
		
		//8 3 5 2 7 9 6 1 4
		var targarrt = [this.parent.targ8, this.parent.targ3, this.parent.targ5, this.parent.targ2, this.parent.targ7, this.parent.targ9, this.parent.targ6, this.parent.targ1, this.parent.targ4];
		
		var tcoord = [85.25,220.35,359.29999999999995,496.4,632.55,765.65,904.6,1050.6999999999998,1197.75];
		
		var numbarr = [this.parent.nbr01,this.parent.nbr02,this.parent.nbr03,this.parent.nbr04,this.parent.nbr05,this.parent.nbr06,this.parent.nbr07,this.parent.nbr08,this.parent.nbr09];
		
		for (var n=0; n<9; n++) {
			zimify(this).drag({all:true});
			this.setBounds(-50,-50,100,100);
			zimify(this.parent).top();
		}
		
		var origx = this.x;
		var origy = this.y;
		
		var hitCheck = false;
		
		this.on('click', function (e){
		if (this.currentLabel=="rght") {
			var instance = createjs.Sound.play("s"+this.name.charAt(4));
			instance.volume = 0.6;
			}
		});
		
		this.on("pressmove", function() {
			this.parent.title.mtdt.text="";
			this.parent.tmr.text="";
			if (zim.hitTestRect(this, targarr[this.name.charAt(4)-1])) {
					if (!hitCheck) {// if it was not hitting, now it is...
						hitCheck = true;
						stage.update();
					}
				} else {
					if (hitCheck) {// if it was hitting, now it is not...				
						hitCheck = false;
						stage.update();
					}
				}
			});
		
		//Mouse UP and SNAP
		this.on("pressup", function (evt) {
			this.alpha = 1;
			if (intersect(evt.currentTarget, targarr[this.name.charAt(4)-1]) && (targarr[this.name.charAt(4)-1].name.charAt(4)==this.name.charAt(4))) {
				var dB = targarr[this.name.charAt(4)-1].getTransformedBounds();
				this.x = dB.x +91; 
				this.y = dB.y +94;
				if (this.currentFrame==0) {
				window.parent.rn++;
				}
				this.gotoAndStop("rght");
				targarr[this.name.charAt(4)-1].tf.sft.color="#339900";
				targarr[this.name.charAt(4)-1].gotoAndPlay(1);
				if (window.parent.rn==9) {
				setTimeout(targotoTwo, 1000);
				this.parent.title.mtdt.text="Congratulations!";
				createjs.Sound.play("win");
				this.parent.tmr.text="Completed in " + window.parent.second + " seconds";
				clearInterval(window.parent.clock);	
				if (window.parent.emitter.emitterPaused) {
				window.parent.emitter.spurt(25);
				window.parent.rn=0;
				}
				stage.update(evt);
					}
			}else if (this.y<200) 
			{
			createjs.Sound.play("w");
			this.animate({
		    props:{x:origx, y:origy},
		    time:2,
		    loop:false,
			rewind:false,
		});
			}
		});
		
		//пересечение объектов
		function intersect(obj1, obj2) {
			var objBounds1 = obj1.getTransformedBounds();
			var objBounds2 = obj2.getTransformedBounds();
			if (objBounds1.intersects(objBounds2)) {
				return true;
			}else{
				return false;
			}
		}
		
		function targotoTwo() {
			for (let t=0; t<9; t++) {
				targarr[t].gotoAndPlay(2);
				targarr[t].animate({
		    props:{x:tcoord[t],scale:1}
		});
				
				numbarr[t].animate({
		    props:{x:tcoord[t]-2.5, scale:1}
		});
		numbarr[t].gotoAndStop("rght");
			}
		}
	}
	this.frame_1 = function() {
		this.ntxt.color="#FF9900";
	}
	this.frame_48 = function() {
		this.gotoAndStop(0);
	}
	this.frame_49 = function() {
		this.stop();
		this.noDrag();
		createjs.Sound.play("drop");
	}
	this.frame_50 = function() {
		this.gotoAndStop("rght");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(47).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1));

	// dt
	this.ntxt = new cjs.Text("5", "bold 65px 'Arial'", "#660000");
	this.ntxt.name = "ntxt";
	this.ntxt.textAlign = "center";
	this.ntxt.lineHeight = 75;
	this.ntxt.lineWidth = 100;
	this.ntxt.parent = this;
	this.ntxt.setTransform(41.05,5.9,1.0481,1.0481);

	this.timeline.addTween(cjs.Tween.get(this.ntxt).wait(51));

	// bgr
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FF9900").setStrokeStyle(4,1,1).moveTo(29.3,-29.4).curveTo(41.5,-17.2,41.5,0).curveTo(41.5,17.2,29.3,29.3).curveTo(17.2,41.5,0,41.5).curveTo(-17.2,41.5,-29.4,29.3).curveTo(-41.5,17.2,-41.5,0).curveTo(-41.5,-17.2,-29.4,-29.4).curveTo(-17.2,-41.5,0,-41.5).curveTo(17.2,-41.5,29.3,-29.4).closePath();
	this.shape.setTransform(41.5,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#FFFFCC","rgba(255,204,0,0.8)"],[0,1],-41.5,0,41.5,0).beginStroke().moveTo(-29.4,29.3).curveTo(-41.5,17.2,-41.5,-0).curveTo(-41.5,-17.2,-29.4,-29.4).curveTo(-17.2,-41.5,-0,-41.5).curveTo(17.2,-41.5,29.3,-29.4).curveTo(41.5,-17.2,41.5,-0).curveTo(41.5,17.2,29.3,29.3).curveTo(17.2,41.5,-0,41.5).curveTo(-17.2,41.5,-29.4,29.3).closePath();
	this.shape_1.setTransform(41.5,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#990000").setStrokeStyle(4,1,1).moveTo(29.3,-29.4).curveTo(41.5,-17.2,41.5,0).curveTo(41.5,17.2,29.3,29.3).curveTo(17.2,41.5,0,41.5).curveTo(-17.2,41.5,-29.4,29.3).curveTo(-41.5,17.2,-41.5,0).curveTo(-41.5,-17.2,-29.4,-29.4).curveTo(-17.2,-41.5,0,-41.5).curveTo(17.2,-41.5,29.3,-29.4).closePath();
	this.shape_2.setTransform(41.5,41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#FF0000","rgba(153,0,0,0.8)","rgba(255,0,0,0.8)","rgba(255,0,0,0.8)"],[0,1,1,1],-41.5,0,41.5,0).beginStroke().moveTo(-29.4,29.3).curveTo(-41.5,17.2,-41.5,-0).curveTo(-41.5,-17.2,-29.4,-29.4).curveTo(-17.2,-41.5,-0,-41.5).curveTo(17.2,-41.5,29.3,-29.4).curveTo(41.5,-17.2,41.5,-0).curveTo(41.5,17.2,29.3,29.3).curveTo(17.2,41.5,-0,41.5).curveTo(-17.2,41.5,-29.4,29.3).closePath();
	this.shape_3.setTransform(41.5,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#006600").setStrokeStyle(4,1,1).moveTo(30.8,-30.8).curveTo(43.5,-18.1,43.5,0).curveTo(43.5,18,30.8,30.8).curveTo(18,43.5,0,43.5).curveTo(-18,43.5,-30.7,30.8).curveTo(-43.5,18,-43.5,0).curveTo(-43.5,-18.1,-30.7,-30.8).curveTo(-18,-43.5,0,-43.5).curveTo(18,-43.5,30.8,-30.8).closePath();
	this.shape_4.setTransform(41.55,41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#00FF00","rgba(0,153,0,0.8)","rgba(255,0,0,0.8)","rgba(255,0,0,0.8)"],[0,1,1,1],-43.5,0,43.5,0).beginStroke().moveTo(-30.7,30.8).curveTo(-43.5,18,-43.5,-0).curveTo(-43.5,-18,-30.7,-30.8).curveTo(-18.1,-43.5,0,-43.5).curveTo(18,-43.5,30.7,-30.8).curveTo(43.5,-18,43.5,-0).curveTo(43.5,18,30.7,30.8).curveTo(18,43.5,0,43.5).curveTo(-18.1,43.5,-30.7,30.8).closePath();
	this.shape_5.setTransform(41.55,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},48).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-4,109,91);


(lib.MLabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		gsap.from(this, 2, {x:100, skewX:45, alpha:0, ease:Sine.inOut});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой_1
	this.mtdt = new cjs.Text("Drag &Drop Numbers", "65px 'Arial'", "#006699");
	this.mtdt.name = "mtdt";
	this.mtdt.textAlign = "center";
	this.mtdt.lineHeight = 75;
	this.mtdt.lineWidth = 674;
	this.mtdt.parent = this;
	this.mtdt.setTransform(338.9,85.95);

	this.timeline.addTween(cjs.Tween.get(this.mtdt).wait(1));

}).prototype = getMCSymbolPrototype(lib.MLabel, new cjs.Rectangle(0,84,677.8,76.6), null);


(lib.DTField = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.sft = new cjs.Text("", "bold 32px 'Arial'", "#663300");
	this.sft.name = "sft";
	this.sft.textAlign = "center";
	this.sft.lineHeight = 38;
	this.sft.lineWidth = 181;
	this.sft.parent = this;
	this.sft.setTransform(92.5,2);

	this.timeline.addTween(cjs.Tween.get(this.sft).wait(1));

}).prototype = getMCSymbolPrototype(lib.DTField, new cjs.Rectangle(0,0,185,39.8), null);


(lib.TargetNumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var m=["Null","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
		
		this.tf.sft.text=m[this.name.charAt(4)];
		
		for (var t=0; t<9; t++) {
			zimify(this);
			this.setBounds(-50,-50,100,100);
			zimify(this.parent).top();
		}
		
		this.on('click', function (e){
		createjs.Sound.play("s"+this.name.charAt(4));
		});
		
		gsap.from(this, 1, {alpha:0});
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// textfield
	this.tf = new lib.DTField();
	this.tf.name = "tf";
	this.tf.parent = this;
	this.tf.setTransform(43,-25.9,1,1,0,0,0,92.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.tf).to({scaleX:1.1405,scaleY:1.1405,x:43.05,y:-25.85},4).to({regY:19.8,scaleX:1.1155,scaleY:1.1155,x:43.2,y:-25.9},3).to({regY:19.9,scaleX:1,scaleY:1,x:43},6).wait(1));

	// target
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#333333").setStrokeStyle(1,1,1).moveTo(30.1,-30.1).curveTo(42.5,-17.6,42.5,0).curveTo(42.5,17.6,30.1,30).curveTo(17.7,42.5,0,42.5).curveTo(-17.6,42.5,-30.1,30).curveTo(-42.5,17.6,-42.5,0).curveTo(-42.5,-17.6,-30.1,-30.1).curveTo(-17.6,-42.5,0,-42.5).curveTo(17.7,-42.5,30.1,-30.1).closePath();
	this.shape.setTransform(42.55,42.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#666666","rgba(51,51,51,0.98)","rgba(51,51,51,0.875)","rgba(102,102,102,0.8)"],[0,0.165,0.859,1],0,0,0,0,0,43).beginStroke().moveTo(-30.1,30.1).curveTo(-42.5,17.6,-42.5,0).curveTo(-42.5,-17.6,-30.1,-30.1).curveTo(-17.6,-42.5,0,-42.5).curveTo(17.7,-42.5,30.1,-30.1).curveTo(42.5,-17.6,42.6,0).curveTo(42.5,17.6,30.1,30.1).curveTo(17.7,42.6,0,42.6).curveTo(-17.6,42.6,-30.1,30.1).closePath();
	this.shape_1.setTransform(42.55,42.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-48.5,211,134.6);


// stage content:
(lib.dragdropnmbrsgsap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		
		var root = this;
		
		//кол-во правильно дропнутых номеров:	
		rn = 0;
		
		//салют
		emitter = new Emitter({
			startPaused: true
		}).centerReg().loc(root.title);
		emitter.x = this.title.x;
		emitter.y = this.title.y;
		
		root.tmr.text="";
		
		//таймер
		second = -1;
		clock = setInterval(function() {
			second++;
		}, 1000);
		
		//8 3 5 2 7 9 6 1 4
		var arrtargcoord=[this.targ8,this.targ3,this.targ5,this.targ2,this.targ7,this.targ9,this.targ6,this.targ1,this.targ4];
		
		//sound
		var sounds = {path:"./sounds/",
		            manifest: [
					{id: "s1", src: { mp3:"1.mp3"}},
					{id: "s2", src: { mp3:"2.mp3"}},
					{id: "s3", src: { mp3:"3.mp3"}},
					{id: "s4", src: { mp3:"4.mp3"}},
					{id: "s5", src: { mp3:"5.mp3"}},
					{id: "s6", src: { mp3:"6.mp3"}},
					{id: "s7", src: { mp3:"7.mp3"}},
					{id: "s8", src: { mp3:"8.mp3"}},
					{id: "s9", src: { mp3:"9.mp3"}},
					{id: "drop", src: { mp3:"dropr.mp3"}},
					{id: "w", src: { mp3:"wrong.mp3"}},
					{id: "win", src: { mp3:"win.mp3"}}
		    ]};
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSounds(sounds);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// numbers
	this.nbr01 = new lib.Nums();
	this.nbr01.name = "nbr01";
	this.nbr01.parent = this;
	this.nbr01.setTransform(158.1,661.5,1,1,0,0,0,41,41.5);

	this.nbr09 = new lib.Nums();
	this.nbr09.name = "nbr09";
	this.nbr09.parent = this;
	this.nbr09.setTransform(1135.8,661.5,1,1,0,0,0,39,41.5);

	this.nbr08 = new lib.Nums();
	this.nbr08.name = "nbr08";
	this.nbr08.parent = this;
	this.nbr08.setTransform(1012.95,661.5,1,1,0,0,0,39,41.5);

	this.nbr07 = new lib.Nums();
	this.nbr07.name = "nbr07";
	this.nbr07.parent = this;
	this.nbr07.setTransform(890.1,661.5,1,1,0,0,0,39,41.5);

	this.nbr06 = new lib.Nums();
	this.nbr06.name = "nbr06";
	this.nbr06.parent = this;
	this.nbr06.setTransform(767.25,661.5,1,1,0,0,0,39,41.5);

	this.nbr05 = new lib.Nums();
	this.nbr05.name = "nbr05";
	this.nbr05.parent = this;
	this.nbr05.setTransform(644.4,661.5,1,1,0,0,0,39,41.5);

	this.nbr04 = new lib.Nums();
	this.nbr04.name = "nbr04";
	this.nbr04.parent = this;
	this.nbr04.setTransform(521.55,661.5,1,1,0,0,0,39,41.5);

	this.nbr03 = new lib.Nums();
	this.nbr03.name = "nbr03";
	this.nbr03.parent = this;
	this.nbr03.setTransform(398.7,661.5,1,1,0,0,0,39,41.5);

	this.nbr02 = new lib.Nums();
	this.nbr02.name = "nbr02";
	this.nbr02.parent = this;
	this.nbr02.setTransform(275.85,661.5,1,1,0,0,0,39,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nbr02},{t:this.nbr03},{t:this.nbr04},{t:this.nbr05},{t:this.nbr06},{t:this.nbr07},{t:this.nbr08},{t:this.nbr09},{t:this.nbr01}]}).wait(1));

	// Targets
	this.targ4 = new lib.TargetNumb();
	this.targ4.name = "targ4";
	this.targ4.parent = this;
	this.targ4.setTransform(1199.35,124.1,1,1,0,0,0,42.6,42.6);

	this.targ1 = new lib.TargetNumb();
	this.targ1.name = "targ1";
	this.targ1.parent = this;
	this.targ1.setTransform(1052.3,124.1,1,1,0,0,0,42.6,42.6);

	this.targ6 = new lib.TargetNumb();
	this.targ6.name = "targ6";
	this.targ6.parent = this;
	this.targ6.setTransform(906.2,124.1,1,1,0,0,0,42.6,42.6);

	this.targ9 = new lib.TargetNumb();
	this.targ9.name = "targ9";
	this.targ9.parent = this;
	this.targ9.setTransform(767.25,124.1,1,1,0,0,0,42.6,42.6);

	this.targ7 = new lib.TargetNumb();
	this.targ7.name = "targ7";
	this.targ7.parent = this;
	this.targ7.setTransform(634.15,124.1,1,1,0,0,0,42.6,42.6);

	this.targ2 = new lib.TargetNumb();
	this.targ2.name = "targ2";
	this.targ2.parent = this;
	this.targ2.setTransform(498,124.1,1,1,0,0,0,42.6,42.6);

	this.targ5 = new lib.TargetNumb();
	this.targ5.name = "targ5";
	this.targ5.parent = this;
	this.targ5.setTransform(360.9,124.1,1,1,0,0,0,42.6,42.6);

	this.targ3 = new lib.TargetNumb();
	this.targ3.name = "targ3";
	this.targ3.parent = this;
	this.targ3.setTransform(221.95,124.1,1,1,0,0,0,42.6,42.6);

	this.targ8 = new lib.TargetNumb();
	this.targ8.name = "targ8";
	this.targ8.parent = this;
	this.targ8.setTransform(86.85,124.1,1,1,0,0,0,42.6,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.targ8},{t:this.targ3},{t:this.targ5},{t:this.targ2},{t:this.targ7},{t:this.targ9},{t:this.targ6},{t:this.targ1},{t:this.targ4}]}).wait(1));

	// txtFields
	this.tmr = new cjs.Text("Completed in 00 seconds", "48px 'Arial'", "#336600");
	this.tmr.name = "tmr";
	this.tmr.textAlign = "center";
	this.tmr.lineHeight = 56;
	this.tmr.lineWidth = 709;
	this.tmr.parent = this;
	this.tmr.setTransform(662.4,453.65);

	this.title = new lib.MLabel();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(664.7,380.15,1,1,0,0,0,346.4,112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.tmr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(634.8,395.7,657.5,309.3);
// library properties:
lib.properties = {
	id: 'E3AFE25968C93B4E95B9B7CB3B306BC7',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFEEB",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E3AFE25968C93B4E95B9B7CB3B306BC7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;