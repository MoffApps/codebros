codebros
========

CBS Codebros


Tutorial Series on Cocos2d-js

https://www.youtube.com/playlist?list=PLRtjMdoYXLf7n9bghH1k63kisb-VDzGu1


 ********************* Mouse Event ****************************************************************************************************************************

        if( cc.sys.capabilities.hasOwnProperty('mouse') ) {
            cc.log('mouse');
            cc.eventManager.addListener(
                    {
                        event: cc.EventListener.MOUSE,
                        onMouseDown:function(event){
                            cc.log('mouse clicked');
                            cc.log(event);
                        }
                    }, this)
        }


        ********************* Logging ***************************************************
			Log Window size
		    //cc.log('Width => '+size.width);
		    //cc.log('Heigth => '+size.height);


        *********************Tutorial 7 (Adding a sprite) ********************************

        //var sprite = new cc.Sprite.create(res.CloseNormal_png);
        //sprite.setAnchorPoint(cc.p(0.5,0.5));
        //sprite.setPosition(cc.p(size.width/2, size.height/2));
        //this.addChild(sprite,0);

      
        ********************* Tutorial 8 - MoveTo *****************************************
        
        Moves a CCNode object to the position x,y. x and y are absolute coordinates by modifying it's position attribute. 
        Several CCMoveTo actions can be concurrently called, and the resulting 
        movement will be the sum of individual movements.
        
        //var sprite_Action = cc.MoveTo.create(2,cc.p(100,100));
        //sprite.runAction(sprite_Action);
             
    

******************************************************************
*************************  USEFUL LINKS  *************************
******************************************************************

********
Cocos2d
********
http://www.cocos2d-x.org/

************
Github Repo
************
https://github.com/MoffApps/codebros

**********
Tutorials
**********
https://www.youtube.com/playlist?list=PLRtjMdoYXLf7n9bghH1k63kisb-VDzGu1

***************
Game Tutuorial
***************
http://www.gamefromscratch.com/page/Cocos2D-HTML-5-Tutorial-Series-table-of-contents.aspx

******************
Circle Chain Game
******************
http://www.emanueleferonato.com/2013/05/16/from-zero-to-a-complete-game-with-cocos2d-html5-step-1/
