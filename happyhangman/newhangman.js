(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"newhangman_atlas_", frames: [[1938,316,105,105],[1102,645,659,93],[1102,830,652,88],[1828,316,108,108],[1324,920,223,24],[1324,946,223,24],[1549,947,210,23],[1763,645,277,63],[1763,710,277,63],[1102,469,755,86],[1102,557,755,86],[1102,740,652,88],[1828,426,75,26],[1859,454,75,26],[1756,775,261,60],[1859,482,64,22],[1756,837,233,53],[1756,892,233,53],[1102,920,220,50],[1687,316,139,130],[1687,0,302,314],[0,622,1100,620],[0,0,1100,620],[0,1244,975,50],[0,1296,1100,33],[1102,0,583,467],[1938,423,70,70]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_75 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_76 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_77 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_78 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_79 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_80 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_81 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_82 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_83 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gingerman = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gm_background2 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Hangmancover = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.head01 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.head02 = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.mouse_white = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.onlettersh = function() {
	this.initialize(ss["newhangman_atlas_"]);
	this.gotoAndStop(26);
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


(lib.StartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.CachedTexturedBitmap_78();
	this.instance.parent = this;
	this.instance.setTransform(37.35,6.45,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.35,6.45,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_80();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.25,7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Слой_1
	this.instance_3 = new lib.CachedTexturedBitmap_81();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_82();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_83();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.9,0.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,116.5,26.5);


(lib.StartBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		exportRoot.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// brown_frame
	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(-1.85,-1.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// bg___копия
	this.instance_1 = new lib.CachedTexturedBitmap_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	// Слой_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5iDcIAAm3MAzFAAAIAAG3g");
	mask.setTransform(163.5,21);

	// red_lines
	this.instance_2 = new lib.CachedTexturedBitmap_76();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-365.9,0,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_75();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-361,0,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-365.9}}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2,p:{x:-51}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({x:-356.05},0).wait(1).to({x:-351.15},0).wait(1).to({x:-346.2},0).wait(1).to({x:-341.3},0).wait(1).to({x:-336.4},0).wait(1).to({x:-331.45},0).wait(1).to({x:-326.55},0).wait(1).to({x:-321.6},0).wait(1).to({x:-316.7},0).wait(1).to({x:-311.8},0).wait(1).to({x:-306.85},0).wait(1).to({x:-301.95},0).wait(1).to({x:-297},0).wait(1).to({x:-292.1},0).wait(1).to({x:-287.15},0).wait(1).to({x:-282.25},0).wait(1).to({x:-277.35},0).wait(1).to({x:-272.4},0).wait(1).to({x:-267.5},0).wait(1).to({x:-262.55},0).wait(1).to({x:-257.65},0).wait(1).to({x:-252.75},0).wait(1).to({x:-247.8},0).wait(1).to({x:-242.9},0).wait(1).to({x:-237.95},0).wait(1).to({x:-233.05},0).wait(1).to({x:-228.15},0).wait(1).to({x:-223.2},0).wait(1).to({x:-218.3},0).wait(1).to({x:-213.35},0).wait(1).to({x:-208.45},0).wait(1).to({x:-203.55},0).wait(1).to({x:-198.6},0).wait(1).to({x:-193.7},0).wait(1).to({x:-188.75},0).wait(1).to({x:-183.85},0).wait(1).to({x:-178.95},0).wait(1).to({x:-174},0).wait(1).to({x:-169.1},0).wait(1).to({x:-164.15},0).wait(1).to({x:-159.25},0).wait(1).to({x:-154.35},0).wait(1).to({x:-149.4},0).wait(1).to({x:-144.5},0).wait(1).to({x:-139.55},0).wait(1).to({x:-134.65},0).wait(1).to({x:-129.7},0).wait(1).to({x:-124.8},0).wait(1).to({x:-119.9},0).wait(1).to({x:-114.95},0).wait(1).to({x:-110.05},0).wait(1).to({x:-105.1},0).wait(1).to({x:-100.2},0).wait(1).to({x:-95.3},0).wait(1).to({x:-90.35},0).wait(1).to({x:-85.45},0).wait(1).to({x:-80.5},0).wait(1).to({x:-75.6},0).wait(1).to({x:-70.7},0).wait(1).to({x:-65.75},0).wait(1).to({x:-60.85},0).wait(1).to({x:-55.9},0).to({_off:true},1).wait(1));

	// bg
	this.instance_4 = new lib.CachedTexturedBitmap_77();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,329.5,46.5);


(lib.ScreenBukva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// cover
	this.instance = new lib.onlettersh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// text
	this.bfield = new cjs.Text("", "bold 48px 'Courier New'", "#000066");
	this.bfield.name = "bfield";
	this.bfield.textAlign = "center";
	this.bfield.lineHeight = 56;
	this.bfield.lineWidth = 57;
	this.bfield.parent = this;
	this.bfield.setTransform(35.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.bfield).wait(2));

	// back
	this.instance_1 = new lib.CachedTexturedBitmap_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Mouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.mouse_white();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2453,0.2453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouse, new cjs.Rectangle(0,0,143,114.6), null);


(lib.Gingerman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.gingerman();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2318,0.2318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gingerman, new cjs.Rectangle(0,0,70,72.8), null);


(lib.ContinueBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(8.75,6.1,0.4209,0.4209);

	this.instance_1 = new lib.CachedTexturedBitmap_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.75,6.1,0.4209,0.4209);

	this.instance_2 = new lib.CachedTexturedBitmap_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.9,6.4,0.4209,0.4209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Слой_1
	this.instance_3 = new lib.CachedTexturedBitmap_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.45,-0.45,0.4209,0.4209);

	this.instance_4 = new lib.CachedTexturedBitmap_7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.45,-0.45,0.4209,0.4209);

	this.instance_5 = new lib.CachedTexturedBitmap_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.9,0.25,0.4209,0.4209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,116.60000000000001,26.5);


(lib.Bukva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "pointer";
		
		this.stop();
		this.letfield.color="DarkGreen";		
			
		pb = false; //нажата ли буква
		
		this.on('click', function (e){	
		
		if ((attempts!=0) && (pb==false)){
			
		//selectletter.play();		

		playsound(selectletter);	
			
		t = 0;
		z = 0;
			
		tn = this.name;
		tb = abcontainer.getChildByName(tn);
			
		//Circular progress bar 
		var arca = new createjs.Shape();
		stage.addChild(arca);
		
		pb = true;//button is pressed	
			
		ax=this.x+24.5;
		ay=this.y+27.3;
		
		var deegres = 0;
		procent = 0;
		oneProcent = 360 / 100;
		result = oneProcent * 100;
			
		//Таймер
		
		fps = 1000 / 200;
			
		let clock = setInterval(function() {
			
			deegres += 8;
			pb=true;
			procent = deegres / oneProcent;	
			
			arca.graphics.beginStroke("DarkSeaGreen")
			
			.setStrokeStyle(5);	
			
			arca.graphics.arc( ax, ay, 29, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
			
			if (deegres >= result) {
				clearInterval(clock);
				deegres = 0;
				arca.graphics.endStroke();	
				stage.removeChild(arca);		
				
		//Проверка буквы
				while (t <	w.length) {
			if (tn==w[t]) {		
				container.getChildAt(t).gotoAndStop(1);
				z++;		
				letrues++;
				if (letrues==w.length) {
					playsound(win);	
					attempts=0;			
					changeTextInFields("Слово угадано! :-)","");
					root.continue_btn.visible=true;
				}else{
					playsound(openletter);	
				}
				}
				t++;
				if ((t==w.length)&&(z==0)) {
				attempts--;	
				root.tf.text=String(root.tf.text - 1);
				//monster moving
				ms++;
				if (ms<7) {//озвучка (с шага 2)		
					playsound(mousesteps[Number(ms-2)]);		
		}			
				setTimeout(movingMonster, 120);
				if (attempts==0) {		
				playsound(eaten);	
				setTimeout(openWord, 3300);
				}
				}
		}
				tb.visible=false;
				pb=false;
			} 
		}, fps);	
				
		pressletters+=this.name;  
		this.gotoAndStop(this.currentFrame + 1);
		
		}
		
		});
	}
	this.frame_1 = function() {
		this.stop();
		
		this.letfield.color="DarkMagenta";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// letter_field
	this.letfield = new cjs.Text("А", "bold 36px 'Arial'", "#005A0D");
	this.letfield.name = "letfield";
	this.letfield.textAlign = "center";
	this.letfield.lineHeight = 42;
	this.letfield.lineWidth = 45;
	this.letfield.parent = this;
	this.letfield.setTransform(24.1,10.1);

	this.timeline.addTween(cjs.Tween.get(this.letfield).wait(2));

	// back
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-2,0.6,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.7,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-0.1,54,54);


// stage content:
(lib.happynewhangman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,Main:1,Refresh:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		root = this;
		root.stop();
		
		//root.start_btn.on('click', function (e) {
		//	exportRoot.gotoAndStop(1);
		//	//root.gotoAndStop(this.currentFrame + 1);
		//});
	}
	this.frame_1 = function() {
		this.stop();
		
		this.continue_btn.visible=false;
		
		this.continue_btn.on('click', function (e){
			//location.reload();
			root.gotoAndPlay(2);
		});
		
		startNewGame();
		
		//вывод слова на экран
		
		container = new createjs.Container();
		container.y = 50;
		
		function showWord() {
		for (s=0; s<w.length; s++) {
			g = new lib.ScreenBukva();
			g.name = "g" + s;
			g.x = 80 * (s + 1);
			g.y = 20;
			g.bfield.text = w[s];	
			container.addChildAt(g, s);
		}
		
		stage.addChild(container);
		
		}
		
		//вывод алфавита на экран
		abc = "0АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
			
		function showABC() {
		abcontainer = new createjs.Container();
		
		for (i=1; i<34; i++) {
		b = new lib.Bukva();
		b.name = abc[i];		
						if (i <= 11)
		                {
		                    b.x = 60 * (i + 1);
							b.y = 435;
		                }
		                if (i > 11)
		                {
							b.x = 60 * (i - 11 + 1);
		                    b.y = 495;
		                }
		                if (i > 22)
		                {
							b.x = 60 * (i - 22 + 1);
		                    b.y = 555;
		                }
		
		b.letfield.text = abc[i];
		abcontainer.addChildAt(b, 0);
		}
		
		stage.addChild(abcontainer);
		}
		
		//позиция персонажей
		function persPosition() {
		mx = root.mouse.x;
		my = root.mouse.y;
		}
		
		showWord();
		
		if (game==0) {
			showABC();
		}
		
		persPosition();
		
		changeTextInFields("Осталось попыток:", this.tf.text=String(attempts));
	}
	this.frame_2 = function() {
		//Refresh scene;
		
		//очищаем слово
		container.removeAllChildren();
		stage.removeChild(container);
		
		//восстановление нажатых букв
		for (p=0; p<pressletters.length; p++) {
			abcontainer.getChildByName(pressletters[p]).gotoAndStop(0);
			abcontainer.getChildByName(pressletters[p]).visible=true;
		}
		
		//сброс позиции персонажей
		this.mouse.x = mx;
		this.mouse.y = my;
		this.gman.visible=true;
		
		//увеличиваем счетчик партий
		game++;
		
		exportRoot.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// FIELDS
	this.sbar = new lib.StartBar();
	this.sbar.name = "sbar";
	this.sbar.parent = this;
	this.sbar.setTransform(170.45,550,1,1,0,0,0,0.9,21.5);

	this.continue_btn = new lib.ContinueBtn();
	this.continue_btn.name = "continue_btn";
	this.continue_btn.parent = this;
	this.continue_btn.setTransform(459,347,1.173,1.1879,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.continue_btn, 0, 1, 2);

	this.tf = new cjs.Text("6", "25px 'Arial'", "#33FF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 30;
	this.tf.lineWidth = 20;
	this.tf.parent = this;
	this.tf.setTransform(1029,498.7);

	this.mtf = new cjs.Text("Осталось попыток:", "18px 'Arial'", "#FFFFFF");
	this.mtf.name = "mtf";
	this.mtf.textAlign = "center";
	this.mtf.lineHeight = 22;
	this.mtf.lineWidth = 183;
	this.mtf.parent = this;
	this.mtf.setTransform(938.5,503.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sbar}]}).to({state:[{t:this.mtf},{t:this.tf},{t:this.continue_btn}]},1).wait(2));

	// MOUSE
	this.mouse = new lib.Mouse();
	this.mouse.name = "mouse";
	this.mouse.parent = this;
	this.mouse.setTransform(73.05,326.2,1,1,0,0,0,71.5,57.2);
	this.mouse._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1).to({_off:false},0).wait(2));

	// GINGER
	this.gman = new lib.Gingerman();
	this.gman.name = "gman";
	this.gman.parent = this;
	this.gman.setTransform(919,209.05,1,1,0,0,0,35,36.4);
	this.gman._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gman).wait(1).to({_off:false},0).wait(2));

	// GYR
	this.instance = new lib.head02();
	this.instance.parent = this;
	this.instance.setTransform(0,395);

	this.instance_1 = new lib.head01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2,1.0005,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(2));

	// BACK
	this.instance_2 = new lib.Hangmancover();
	this.instance_2.parent = this;

	this.instance_3 = new lib.gm_background2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(353.7,310,746.3,310);
// library properties:
lib.properties = {
	id: '7B372D801572E74583A3C827AB60F7EA',
	width: 1100,
	height: 620,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/newhangman_atlas_.png", id:"newhangman_atlas_"}
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
an.compositions['7B372D801572E74583A3C827AB60F7EA'] = {
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