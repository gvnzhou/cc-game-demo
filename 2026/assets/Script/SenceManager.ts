// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import { Loading } from './Loading'

const {ccclass, property} = cc._decorator;

@ccclass
export default class SenceManager extends cc.Component {

    private loading: Loading = null;
    private curLoadingScene: string;

    // LIFE-CYCLE CALLBACKS:

    protected onLoad () {
        // 控制抗锯齿是否开启
        cc.view.enableAntiAlias(false);
    }

    protected start () {

    }

    // update (dt) {}

    private loadScence (sceneName: string) {
        this.loading.startLoading(); 
        this.curLoadingScene = sceneName       
        cc.director.preloadScene(sceneName, this.onSceneLoaded);
    }

    private onSceneLoaded () {
        this.loading.stopLoading();
        cc.director.loadScene(this.curLoadingScene);
    }
}
