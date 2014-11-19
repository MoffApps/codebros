
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(sprite,0);
        
        
        //Log Window size
       // cc.log('Width => '+size.width);
       // cc.log('Heigth => '+size.height);
        
        //*********************MoveTo********************************
        
        //Moves a CCNode object to the position x,y. x and y are absolute coordinates by modifying it's position attribute. 
        //Several CCMoveTo actions can be concurrently called, and the resulting 
        //movement will be the sum of individual movements.
        
        //var sprite_Action = cc.MoveTo.create(2,cc.p(100,100));
        //sprite.runAction(sprite_Action);
        
        
        
        
        //*********************MoveBy********************************
        
        //Moves a CCNode object x,y pixels by modifying it's position attribute. 
        //x and y are relative to the position of the object. 
        //Several CCMoveBy actions can be concurrently called, and the resulting 
        //movement will be the sum of individual movements.
        
        //var sprite_Action = cc.MoveBy.create(2,cc.p(50,100));
        //sprite.runAction(sprite_Action);
        
        //*********************JumpTo********************************
       
        //Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
        
        // var sprite_Action = cc.JumpTo.create(2,cc.p(100,100),50,4);
        //sprite.runAction(sprite_Action);
        
        //*********************JumpBy********************************
        
        //Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
       
        //var sprite_Action = cc.JumpBy.create(2,cc.p(100,100),50,4);
        //sprite.runAction(sprite_Action);
              
        //*********************BezierTo********************************
       
        
        //An action that moves the target with a cubic Bezier curve to a destination point.
        
        //var sprite_Action = cc.JumpBy.create(2,cc.p(100,100),50,4);
        //sprite.runAction(sprite_Action);
        
        
        
        //*********************BezierBy********************************
       
        //An action that moves the target with a cubic Bezier curve by a certain distance.
        
       // var bezier =[cc.p(0,size.height/2),cc.p(100,-size.width/4),cc.p(100,100)];
       // var sprite_Action = cc.BezierBy.create(3,bezier);
       // sprite.runAction(sprite_Action);
        
        
        
        //*********************Place********************************

        //Places the node in a certain position
        // var sprite_Action = cc.Place.create(cc.p(100,100));
        //sprite.runAction(sprite_Action);
       
        
        //*********************Repeat********************************
        
        //Repeats an action a number of times. To repeat an action forever use the CCRepeatForever action.
      
        // var move_Action = cc.MoveBy.create(2,cc.p(50,100));
       // var sprite_Action = cc.Repeat.create(move_Action,5);
       // sprite.runAction(sprite_Action);
        
      
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

