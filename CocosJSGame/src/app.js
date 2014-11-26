
var HelloWorldLayer = cc.Layer.extend({
	size:null,
    monsters:[],
    ctor:function () {

        this._super();
        size = cc.winSize;

        // Create and place background
        var spriteBG = new cc.Sprite.create(res.bg);
        spriteBG.setAnchorPoint(cc.p(0.5,0.5));
        spriteBG.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(spriteBG,0);

        // Create and place ninja
        var ninja = new cc.Sprite.create(res.player);
        ninja.setAnchorPoint(cc.p(0.5,0.5));
        ninja.setPosition(cc.p(size.width/10, size.height/2));
        this.addChild(ninja,0);
        
        this.schedule(this.gameLogic, 3);
        
        return true;
    },
    addMonster:function() {
    	var monster = new cc.Sprite.create(res.monster);
    	var Y = 300; 
    	
    	monster.setPosition(size.width + 100, Y);   	
    	this.addChild(monster); // 
    	var actionMove = cc.MoveTo.create(2, cc.p(-100, Y)); //   	  	
    	monster.runAction(actionMove); 	
    },
    
    gameLogic:function(dt) {
    	this.addMonster();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

