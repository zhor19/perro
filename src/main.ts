import * as Phaser from 'phaser';
import { PreloaderScene } from './scenes/preloader.scene';
import { GameScene } from './scenes/game.scene';
import { LoginScene } from './scenes/login.scene';
import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
    appKey: 'FtFn35B3pKcCyR5gui93phgwoiWTtxCv',
    overrideConsoleMethods: false,
    printToConsole: false
});

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x : 0, y: 500 }
        }
    },
    scene: [LoginScene, PreloaderScene, GameScene], 
    backgroundColor: '#21213B'
};

export default new Phaser.Game(config);