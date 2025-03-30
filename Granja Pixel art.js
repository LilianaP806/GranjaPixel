(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Granja pixel art_atlas_1", frames: [[0,1872,272,64],[274,1872,272,64],[0,642,612,408],[614,642,612,408],[1228,642,612,408],[0,1052,612,408],[614,1052,612,408],[0,0,960,640],[962,0,960,640],[1228,1052,612,408],[0,1462,612,408],[614,1462,612,408],[1228,1462,612,408]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._10_20250319_174614_0003removebgpreview1 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Boton1 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Caballo = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Cabra = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Cerdos = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Granja2 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Granja1 = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Patos = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pausa = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Vaca = function() {
	this.initialize(ss["Granja pixel art_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.vaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidovaca");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Vaca();
	this.instance.setTransform(-94.05,-74.05,0.3074,0.363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4511,scaleY:0.5294,x:-138,y:-108},0).wait(1).to({scaleX:0.3204,scaleY:0.3433,x:-98,y:-70},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-108,276.1,216);


(lib.pollitos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidopollito");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._10_20250319_174614_0003removebgpreview1();
	this.instance.setTransform(-35.95,-22.95,0.1175,0.1127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2612,scaleY:0.2501,x:-80,y:-51},0).wait(1).to({scaleX:0.1501,scaleY:0.1521,x:-46,y:-31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-51,159.9,102.1);


(lib.patos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidopato");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Patos();
	this.instance.setTransform(-49.9,-33.95,0.1631,0.1664);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3004,scaleY:0.3135,x:-92,y:-64},0).wait(1).to({scaleX:0.1958,scaleY:0.2056,x:-60,y:-42},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-64,183.8,127.9);


(lib.cerdo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidocerdo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Cerdos();
	this.instance.setTransform(-77.95,-61.95,0.2547,0.3037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4115,scaleY:0.4211,x:-126,y:-86},0).wait(1).to({scaleX:0.2546,scaleY:0.2742,x:-78,y:-56},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-86,251.9,171.8);


(lib.cabra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidocabra");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Cabra();
	this.instance.setTransform(-77.95,-58,0.2547,0.2843);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4116,scaleY:0.4314,x:-126,y:-88},0).wait(1).to({scaleX:0.2808,scaleY:0.2941,x:-86,y:-60},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-88,251.9,176);


(lib.caballo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sonidocaballo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Caballo();
	this.instance.setTransform(-140.05,-75.95,0.4577,0.3723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6732,scaleY:0.6272,x:-206,y:-128},0).wait(1).to({scaleX:0.4839,scaleY:0.4017,x:-148,y:-82},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-128,412.1,255.9);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.stop();
	this.instance.setTransform(-306,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8954,scaleY:0.8826,x:-298,y:-156},0).wait(1).to({scaleX:1.0521,scaleY:1.0688,x:-314,y:-226},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314,-226,643.9,436.1);


(lib.btnsiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Boton1();
	this.instance.setTransform(-306,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.817,scaleY:0.8235,x:-250,y:-168},0).wait(1).to({scaleX:0.9477,scaleY:1.0393,x:-290,y:-212},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306,-212,612,424.1);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pausa();
	this.instance.setTransform(-306,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.902,scaleY:0.8922,x:-302,y:-158},0).wait(1).to({scaleX:1.0066,scaleY:1.0684,x:-320,y:-226},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-226,626,435.9);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vaca
	this.instance = new lib.vaca();
	this.instance.setTransform(341.05,128.05);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Pollitos
	this.instance_1 = new lib.pollitos();
	this.instance_1.setTransform(169.95,419.95);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Patos
	this.instance_2 = new lib.patos();
	this.instance_2.setTransform(451.9,545.95);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Cerditos
	this.instance_3 = new lib.cerdo();
	this.instance_3.setTransform(721.95,439.95);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Cabra
	this.instance_4 = new lib.cabra();
	this.instance_4.setTransform(633.95,97);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Caballo
	this.instance_5 = new lib.caballo();
	this.instance_5.setTransform(107.05,166.95);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Titulo
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(57.05,38.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Capa_1
	this.instance_7 = new lib.Granja2();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,319.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(-98.9,-0.9,1058.9,640.9), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = new createjs.Sound.play("audioMp3", {loop: -1});
		
		sonido.volumen = 0.5;
		
		function detenerSonido(){
				sonido.stop();
			}
		
		this.btnStop.addEventListener("click", detenerSonido);
		
		function iniciarSonido() {
			sonido.play();
		}
		
		this.btnPlay.addEventListener("click", iniciarSonido);
		this.btnsiguiente.on("click",irA2.bind(this));
		
		function irA2 (e){
		this.parent.cambiarEscenario (new lib.cpEscenario2());
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(328,426);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(238,426);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// btnsiguiente
	this.btnsiguiente = new lib.btnsiguiente();
	this.btnsiguiente.name = "btnsiguiente";
	this.btnsiguiente.setTransform(499,380);
	new cjs.ButtonHelper(this.btnsiguiente, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnsiguiente).wait(1));

	// Titulo
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(57.05,38.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.Granja1();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,319.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(-76,-0.9,1036,640.9), null);


// stage content:
(lib.Granjapixelart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario=new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'AE8A96029B071D4C809117F4124C51F0',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Granja pixel art_atlas_1.png?1743143527037", id:"Granja pixel art_atlas_1"},
		{src:"sounds/audioMp3.mp3?1743143527192", id:"audioMp3"},
		{src:"sounds/sonidocaballo.mp3?1743143527192", id:"sonidocaballo"},
		{src:"sounds/sonidocabra.mp3?1743143527192", id:"sonidocabra"},
		{src:"sounds/sonidocerdo.mp3?1743143527192", id:"sonidocerdo"},
		{src:"sounds/sonidopato.mp3?1743143527192", id:"sonidopato"},
		{src:"sounds/sonidopollito.mp3?1743143527192", id:"sonidopollito"},
		{src:"sounds/sonidovaca.mp3?1743143527192", id:"sonidovaca"}
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
an.compositions['AE8A96029B071D4C809117F4124C51F0'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;