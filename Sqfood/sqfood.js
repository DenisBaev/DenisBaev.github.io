(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sqfood_atlas_", frames: [[1202,312,240,186],[1432,1046,192,89],[1444,482,240,186],[1686,482,240,186],[726,802,240,186],[1686,670,240,186],[0,990,240,186],[1210,876,220,80],[1210,958,220,80],[726,990,220,80],[1210,1040,220,80],[1444,858,240,186],[484,990,240,186],[1686,858,240,186],[1868,157,109,173],[1444,670,240,186],[484,802,240,186],[0,802,240,186],[1202,500,240,186],[1826,0,200,155],[968,876,240,186],[242,802,240,186],[242,990,240,186],[1524,0,300,294],[1202,688,240,186],[1202,0,320,310],[0,0,1200,800],[1524,296,342,184]]}
];


// symbols:



(lib.апельсин = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.арахис = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.арбуз = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.банан = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.груша = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.желудь = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.клубника = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.кнопка01 = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.кнопка02 = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.кнопка03 = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.кнопка04 = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.колбаса = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.конфеты = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.миндаль = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.молоко2 = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.морковь = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.огурец = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.печенье = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.тыква = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.фундук = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.хлеб = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.чипсы = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.шоколад = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.like = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.яблоко = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.sign = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.squirrel = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.wooden_log = function() {
	this.initialize(ss["sqfood_atlas_"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
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


(lib.Znak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_29 = function() {
		exportRoot.points.alpha = 1;
		animPoints();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(11));

	// znak
	this.instance = new lib.sign();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(7).to({_off:false},0).to({_off:true},8).wait(7).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,310);


(lib.Scoring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// points
	this.pdt = new cjs.Text("+1", "bold 75px 'Arial'", "#00FF00");
	this.pdt.name = "pdt";
	this.pdt.textAlign = "center";
	this.pdt.lineHeight = 86;
	this.pdt.lineWidth = 100;
	this.pdt.parent = this;
	this.pdt.setTransform(48,-35.55);

	this.timeline.addTween(cjs.Tween.get(this.pdt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scoring, new cjs.Rectangle(-4,-37.5,104,87.8), null);


(lib.Like = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// like
	this.instance = new lib.like();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Like, new cjs.Rectangle(0,0,300,294), null);


(lib.Food = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// food
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhrCBIAAkBIBfAAQAfAAARAFQAXAHAQARQAQARAIAZQAJAYAAAjQAAAggIAXQgJAcgTASQgNANgXAHQgRAGgcAAgAg3BVIAnAAQAUAAALgCQAMgDAIgIQAJgHAFgSQAGgRgBgeQABgdgGgQQgFgQgKgJQgJgJgPgDQgKgCgfAAIgYAAg");
	this.shape.setTransform(164.4,81.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhaBiQgigjAAg+QAAgmAMgbQAJgTAPgQQAPgQASgHQAYgKAfAAQA4AAAjAjQAiAjAAA+QAAA/giAjQghAjg6AAQg4AAgigjgAgyhCQgUAWAAAsQAAArAUAXQAUAXAeAAQAgAAATgXQAUgWAAgsQAAgsgTgWQgTgWghAAQgfAAgTAWg");
	this.shape_1.setTransform(137.05,81.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhaBiQgigjAAg+QAAgmAMgbQAJgTAPgQQAPgQASgHQAYgKAfAAQA4AAAjAjQAiAjAAA+QAAA/giAjQgiAjg5AAQg4AAgigjgAgzhCQgTAWAAAsQAAArAUAXQAUAXAeAAQAgAAAUgXQATgWAAgsQABgsgUgWQgTgWghAAQgfAAgUAWg");
	this.shape_2.setTransform(109.05,81.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhXCBIAAkBICvAAIAAAsIh7AAIAAA9IBqAAIAAAqIhqAAIAABug");
	this.shape_3.setTransform(84.475,81.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AzcNSIAA6jMAm5AAAIAAajg");
	this.shape_4.setTransform(124.5,84.975);

	this.instance = new lib.арбуз();
	this.instance.parent = this;
	this.instance.setTransform(-5,-18);

	this.instance_1 = new lib.фундук();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,44,0.729,0.729);

	this.instance_2 = new lib.морковь();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28,17,0.871,0.871);

	this.instance_3 = new lib.желудь();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33,31,0.7997,0.7997);

	this.instance_4 = new lib.яблоко();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51,45,0.6292,0.6292);

	this.instance_5 = new lib.клубника();
	this.instance_5.parent = this;
	this.instance_5.setTransform(41,29,0.8095,0.8095);

	this.instance_6 = new lib.груша();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-21.35,132.75,0.9686,0.9686,-53.5081);

	this.instance_7 = new lib.огурец();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25,11,0.8602,0.8602);

	this.instance_8 = new lib.банан();
	this.instance_8.parent = this;
	this.instance_8.setTransform(10,0);

	this.instance_9 = new lib.тыква();
	this.instance_9.parent = this;
	this.instance_9.setTransform(14,-4);

	this.instance_10 = new lib.миндаль();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38,43,0.7419,0.7419);

	this.instance_11 = new lib.хлеб();
	this.instance_11.parent = this;
	this.instance_11.setTransform(13,5,0.8925,0.8925);

	this.instance_12 = new lib.чипсы();
	this.instance_12.parent = this;
	this.instance_12.setTransform(7,17);

	this.instance_13 = new lib.апельсин();
	this.instance_13.parent = this;
	this.instance_13.setTransform(11,-10,0.914,0.914);

	this.instance_14 = new lib.колбаса();
	this.instance_14.parent = this;
	this.instance_14.setTransform(12,0,0.9032,0.9032);

	this.instance_15 = new lib.арахис();
	this.instance_15.parent = this;
	this.instance_15.setTransform(27,68);

	this.instance_16 = new lib.шоколад();
	this.instance_16.parent = this;

	this.instance_17 = new lib.конфеты();
	this.instance_17.parent = this;
	this.instance_17.setTransform(6,32,0.9032,0.9032);

	this.instance_18 = new lib.молоко2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(68,-20);

	this.instance_19 = new lib.печенье();
	this.instance_19.parent = this;
	this.instance_19.setTransform(24,23,0.8387,0.8387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-54.1,283.1,294);


(lib.ButtonBgrnds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.parent.dt.color = "#660099";
	}
	this.frame_2 = function() {
		this.parent.dt.color = "#006600";
	}
	this.frame_3 = function() {
		this.parent.dt.color = "#660000";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// b
	this.instance = new lib.кнопка01();
	this.instance.parent = this;

	this.instance_1 = new lib.кнопка02();
	this.instance_1.parent = this;

	this.instance_2 = new lib.кнопка03();
	this.instance_2.parent = this;

	this.instance_3 = new lib.кнопка04();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,80);


(lib.Likes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dis:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible = false;
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// likes
	this.instance = new lib.Like();
	this.instance.parent = this;
	this.instance.setTransform(150.05,147,0.1772,0.1772,0,0,0,150.1,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:150,scaleX:1,scaleY:1,x:150},29).to({scaleX:0.2044,scaleY:0.2044,skewX:180},1).to({scaleX:1,scaleY:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,294);


(lib.FoodBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.buttonMode = true;
		this.cursor = "pointer";
		this.stop();
		
		if (this.name.charAt(4) == 0) {
		this.dt.text = foodlist[this.name.charAt(5)];
			}else{
				this.dt.text = foodlist[this.name.charAt(4) + this.name.charAt(5)];
			}
			
		this.on('click', function (e){
		if ((this.butbckgrnd.currentFrame == 0) && (sp==0)) {
			sp=1;
			this.cursor = 'default';
			createjs.Sound.volume = 0.9;
			audioCtx = new AudioContext();
			audioCtx.resume().then(function() {createjs.Sound.play("click")});
			n=foodlist.indexOf(this.dt.text);
			this.alpha = .8;
			this.butbckgrnd.gotoAndStop(1);
			exportRoot.foodbox.visible = true;
			exportRoot.foodbox.gotoAndStop(foodlist.indexOf(this.dt.text));
			n=foodlist.indexOf(this.dt.text);
			exportRoot.foodbox.alpha = 0;
		    createjs.Tween.get(exportRoot.foodbox).to({alpha:1}, 1000).call(handleComplete);
		    function handleComplete() {
				exportRoot.points.y = 550;
		        if (n <= 10) {
				createjs.Sound.volume = 0.5;
				createjs.Sound.play("right");		
				foodroot[n].butbckgrnd.gotoAndStop(2);
				ra++;
				s++;
				exportRoot.points.alpha = 1;
				exportRoot.points.pdt.color = '#00FF00';
				exportRoot.points.pdt.text = '+1';
				animPoints();
		}else{
			createjs.Sound.volume = 0.4;
			createjs.Sound.play("wrong");
			foodroot[n].butbckgrnd.gotoAndStop(3);
		    wa++;	
			s--;
			exportRoot.points.pdt.color = '#FF0000';
			exportRoot.points.pdt.text = '-1';
			exportRoot.znak.visible = true;
			exportRoot.znak.play();
		}
		    };   	
		}else{
		console.log('выбор ужо сделан');	
			return;
		}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.dt = new cjs.Text("арбуз", "bold 36px 'Arial'", "#663300");
	this.dt.name = "dt";
	this.dt.textAlign = "center";
	this.dt.lineHeight = 42;
	this.dt.parent = this;
	this.dt.setTransform(110,19);

	this.timeline.addTween(cjs.Tween.get(this.dt).wait(1));

	// back
	this.butbckgrnd = new lib.ButtonBgrnds();
	this.butbckgrnd.name = "butbckgrnd";
	this.butbckgrnd.parent = this;
	this.butbckgrnd.setTransform(110,40,1,1,0,0,0,110,40);

	this.timeline.addTween(cjs.Tween.get(this.butbckgrnd).wait(1));

}).prototype = getMCSymbolPrototype(lib.FoodBtn, new cjs.Rectangle(0,0,220,80), null);


// stage content:
(lib.sqfood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(10);
		root = this;
		
		foodroot = [0, root.food01, root.food02, root.food03, root.food04, root.food05, root.food06, root.food07, root.food08, root.food09, root.food10, root.food11, root.food12, root.food13, root.food14, root.food15, root.food16, root.food17, root.food18, root.food19, root.food20];
		
		//Sound
		sounds = {path:"./sound/",
		            manifest: [
					{id: "click", src: { mp3:"click.mp3"}},
					{id: "right", src: { mp3:"right.mp3"}},
					{id: "wrong", src: { mp3:"wrong.mp3"}},
					{id: "win", src: { mp3:"win.mp3"}},
					{id: "badresult", src: { mp3:"badresult.mp3"}}
					
		    ]};
		
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSounds(sounds);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// score
	this.points = new lib.Scoring();
	this.points.name = "points";
	this.points.parent = this;
	this.points.setTransform(1095.8,556.4,1,1,0,0,0,48,6.4);

	this.sc = new cjs.Text("0", "bold 70px 'Arial'", "#FFCC00");
	this.sc.name = "sc";
	this.sc.textAlign = "center";
	this.sc.lineHeight = 80;
	this.sc.lineWidth = 83;
	this.sc.parent = this;
	this.sc.setTransform(1147.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc},{t:this.points}]}).wait(1));

	// znak
	this.likes = new lib.Likes();
	this.likes.name = "likes";
	this.likes.parent = this;
	this.likes.setTransform(685.25,149.5,1,1,0,0,0,150,147);

	this.znak = new lib.Znak();
	this.znak.name = "znak";
	this.znak.parent = this;
	this.znak.setTransform(888.1,622.95,1,1,0,0,0,160,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.znak},{t:this.likes}]}).wait(1));

	// food_list
	this.food20 = new lib.FoodBtn();
	this.food20.name = "food20";
	this.food20.parent = this;
	this.food20.setTransform(337.15,748,1,1,0,0,0,110,40);

	this.food19 = new lib.FoodBtn();
	this.food19.name = "food19";
	this.food19.parent = this;
	this.food19.setTransform(337.15,673.4,1,1,0,0,0,110,40);

	this.food10 = new lib.FoodBtn();
	this.food10.name = "food10";
	this.food10.parent = this;
	this.food10.setTransform(337.15,598.8,1,1,0,0,0,110,40);

	this.food18 = new lib.FoodBtn();
	this.food18.name = "food18";
	this.food18.parent = this;
	this.food18.setTransform(337.15,524.2,1,1,0,0,0,110,40);

	this.food09 = new lib.FoodBtn();
	this.food09.name = "food09";
	this.food09.parent = this;
	this.food09.setTransform(337.15,449.6,1,1,0,0,0,110,40);

	this.food17 = new lib.FoodBtn();
	this.food17.name = "food17";
	this.food17.parent = this;
	this.food17.setTransform(337.15,375.6,1,1,0,0,0,110,40);

	this.food16 = new lib.FoodBtn();
	this.food16.name = "food16";
	this.food16.parent = this;
	this.food16.setTransform(337.15,301,1,1,0,0,0,110,40);

	this.food08 = new lib.FoodBtn();
	this.food08.name = "food08";
	this.food08.parent = this;
	this.food08.setTransform(337.15,226.4,1,1,0,0,0,110,40);

	this.food07 = new lib.FoodBtn();
	this.food07.name = "food07";
	this.food07.parent = this;
	this.food07.setTransform(337.15,151.8,1,1,0,0,0,110,40);

	this.food15 = new lib.FoodBtn();
	this.food15.name = "food15";
	this.food15.parent = this;
	this.food15.setTransform(337.15,77.2,1,1,0,0,0,110,40);

	this.food06 = new lib.FoodBtn();
	this.food06.name = "food06";
	this.food06.parent = this;
	this.food06.setTransform(123.85,748,1,1,0,0,0,110,40);

	this.food14 = new lib.FoodBtn();
	this.food14.name = "food14";
	this.food14.parent = this;
	this.food14.setTransform(123.85,673.4,1,1,0,0,0,110,40);

	this.food13 = new lib.FoodBtn();
	this.food13.name = "food13";
	this.food13.parent = this;
	this.food13.setTransform(123.85,598.8,1,1,0,0,0,110,40);

	this.food05 = new lib.FoodBtn();
	this.food05.name = "food05";
	this.food05.parent = this;
	this.food05.setTransform(123.85,524.2,1,1,0,0,0,110,40);

	this.food04 = new lib.FoodBtn();
	this.food04.name = "food04";
	this.food04.parent = this;
	this.food04.setTransform(123.85,449.6,1,1,0,0,0,110,40);

	this.food12 = new lib.FoodBtn();
	this.food12.name = "food12";
	this.food12.parent = this;
	this.food12.setTransform(123.85,375.6,1,1,0,0,0,110,40);

	this.food03 = new lib.FoodBtn();
	this.food03.name = "food03";
	this.food03.parent = this;
	this.food03.setTransform(123.85,301,1,1,0,0,0,110,40);

	this.food11 = new lib.FoodBtn();
	this.food11.name = "food11";
	this.food11.parent = this;
	this.food11.setTransform(123.85,226.4,1,1,0,0,0,110,40);

	this.food02 = new lib.FoodBtn();
	this.food02.name = "food02";
	this.food02.parent = this;
	this.food02.setTransform(123.85,151.8,1,1,0,0,0,110,40);

	this.food01 = new lib.FoodBtn();
	this.food01.name = "food01";
	this.food01.parent = this;
	this.food01.setTransform(123.85,77.2,1,1,0,0,0,110,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.food01},{t:this.food02},{t:this.food11},{t:this.food03},{t:this.food12},{t:this.food04},{t:this.food05},{t:this.food13},{t:this.food14},{t:this.food06},{t:this.food15},{t:this.food07},{t:this.food08},{t:this.food16},{t:this.food17},{t:this.food09},{t:this.food18},{t:this.food10},{t:this.food19},{t:this.food20}]}).wait(1));

	// food
	this.foodbox = new lib.Food();
	this.foodbox.name = "foodbox";
	this.foodbox.parent = this;
	this.foodbox.setTransform(892.15,605.75,1,1,0,0,0,124.5,85);

	this.timeline.addTween(cjs.Tween.get(this.foodbox).wait(1));

	// layer2
	this.instance = new lib.wooden_log();
	this.instance.parent = this;
	this.instance.setTransform(720,616);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("EAhrA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAEAEADAGQACAFAAAGQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAgRA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAe3A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAddA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAcDA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAapA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAZPA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAX1A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAWbA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAVBA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEATnA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEASNA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAQzA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAPZA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAN/A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAMlA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEALLA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAJxA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAIXA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAG9A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAFjA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAEJA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEACvA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEABVA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgAEA8OQgJgJAAgMQAAgNAJgIQAIgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgIgJgEgBeA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgC4A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgESA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgFsA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgHGA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgIgA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgJ6A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgLUA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgMuA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgOIA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgPiA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgQ8A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgSWA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgTwA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgVKA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgWkA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgX+A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgZYA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgayA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgcMA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgdmA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgfAA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEggaA8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgh0A8OQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIABANQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgi8A7tQgJgJAAgNQAAgMAJgJQAJgIAMgBIAAAAQANABAJAIQAIAJABAMQgBANgIAJIgHAEQgGAFgJAAQgMgBgJgIgEAioA7UQgNAAgJgJQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAgEgi8A6SQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSA5xQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8A44QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSA4XQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8A3eQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSA29QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8A2EQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSA1jQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8A0qQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSA0JQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AzQQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAyvQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8Ax2QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAxVQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AwcQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAv7QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AvCQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAuhQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AtoQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAtHQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AsOQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSArtQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8Aq0QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAqTQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ApaQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAo5QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AoAQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAnfQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AmmQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAmFQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AlMQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAkrQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AjyQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAjRQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AiYQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAh3QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8Ag+QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAgdQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AfkQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAfDQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AeKQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAdpQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AcwQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAcPQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AbWQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAa1QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AZ8QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAZbQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AYiQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAYBQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AXIQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAWnQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AVuQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAVNQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AUUQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSATzQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AS6QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSASZQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ARgQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAQ/QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AQGQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAPlQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AOsQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAOLQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ANSQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAMxQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AL4QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSALXQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AKeQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAJ9QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AJEQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAIjQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AHqQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAHJQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AGQQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAFvQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AE2QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAEVQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ADcQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAC7QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ACCQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSABhQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8AAoQgJgJAAgMQAAgMAJgIQAJgJAMAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSAAHQgIgHAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAHQgJAJgMAAQgNAAgJgJgEgi8gAxQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgBSQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gCLQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgCsQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gDlQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgEGQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gE/QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgFgQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gGZQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgG6QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gHzQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgIUQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gJNQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgJuQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gKnQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgLIQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gMBQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgMiQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gNbQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgN8QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gO1QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgPWQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gQPQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgQwQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gRpQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgSKQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gTDQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgTkQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gUdQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgU+QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gV3QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgWYQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gXRQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgXyQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gYrQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgZMQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gaFQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgamQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gbfQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgcAQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gc5QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgdaQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8geTQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSge0QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gftQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSggOQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8ghHQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSghoQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gihQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgjCQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gj7QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgkcQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8glVQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgl2QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gmvQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgnQQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8goJQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgoqQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gpjQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgqEQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gq9QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgreQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gsXQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgs4QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gtxQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSguSQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gvLQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgvsQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gwlQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgxGQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gx/QgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgygQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8gzZQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSgz6QgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8g0zQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSg1UQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8g2NQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSg2uQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8g3nQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSg4IQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8g5BQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSg5iQgIgIAAgNQAAgMAIgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgi8g6bQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgEAiSg68QgIgIAAgNQAAgMAIgKQAFgEAGgCQAFgCAGAAQAMAAAJAIQAJAKAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgEgiag7iIgGgHQgDgGAAgJQAAgMAJgJQAIgIANgBIAEABIAGgBQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAIgDAAIgHABQgNgBgIgIgEAhPg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMIAAAAQgBANgIAIQgJAJgNAAQgMAAgJgJgEAf1g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAebg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAdBg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAbng7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAaNg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAYzg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAXZg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAV/g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAUlg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEATLg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEARxg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAQXg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAO9g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEANjg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAMJg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAKvg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAJVg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAH7g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAGhg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAFHg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEADtg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEACTg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEAA5g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgAgg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQAMAAAJAJQAIAJABAMQgBAMgIAJQgJAJgMAAQgMAAgJgJgEgB6g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgDUg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgEug7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgGIg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgHig7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgI8g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgKWg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgLwg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgNKg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgOkg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgP+g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgRYg7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgSyg7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgUMg7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgVmg7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgXAg7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgYag7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgZ0g7jQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgbOg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgcog7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgeCg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgfcg7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJgEgg2g7jQgIgJgBgMQABgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(236.8,411.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.447)").s().p("EAhFA75QgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgIAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANIgdAAQgBgNgIgIQgJgJgNAAQgMAAgJAJQgJAIAAANQgQAAgLgIIAHgEQAIgJABgNQgBgMgIgJQgJgIgNgBIAAAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAIAAgeQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAQAAgRAHgKIAGAHQAIAIANABIAHgBIADAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAeAAQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQAMAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgJABgMIAdAAQABAMAIAJQAJAJAMAAQANAAAJgJQAIgIABgNQARACAJAJQgGACgFAEQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAHQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAIAAAeQgNAAgJAIQgIAKAAAMQAAANAIAIQAJAJANAAQgCARgJAJQgDgGgEgEQgJgJgNAAQgMAAgJAJQgJAIAAANg");
	this.shape_1.setTransform(236.8,411.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// mainback
	this.instance_1 = new lib.squirrel();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,400,600,400);
// library properties:
lib.properties = {
	id: 'EE7B8B869BDC4C4CA14CB6BAE02DECCC',
	width: 1200,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sqfood_atlas_.png?1757995509738", id:"sqfood_atlas_"}
	],
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
an.compositions['EE7B8B869BDC4C4CA14CB6BAE02DECCC'] = {
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