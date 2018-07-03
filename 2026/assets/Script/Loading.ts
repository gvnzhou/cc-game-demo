// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Loading extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    interval: number = 0;

    dotCount: number;
    dotMaxCount: number;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.dotCount = 0;
        this.dotMaxCount = 3;
        cc.game.addPersistRootNode(this.node);        
    }

    start () {
        
    }

    // update (dt) {}

    startLoading () {
        this.label.enabled = true;
        this.dotCount = 0;
        let size = cc.view.getVisibleSize();
        this.node.setPosition(cc.p(size.width/2 - this.label.node.width/2, size.height/2));
        this.schedule(this.updateLabel, this.interval);
    }

    stopLoading () {
        this.label.enabled = false;
        this.unschedule(this.updateLabel);
        this.node.setPosition(cc.p(2000, 2000));
    }

    updateLabel () {
        let dots: string = '';
        for (let i = 0; i < this.dotCount; i++) {
            dots += '.';
        }
        this.label.string = 'Loading' + dots;
        this.dotCount += 1;
        if (this.dotCount > this.dotMaxCount) {
            this.dotCount = 0; 
        }
    }
}
