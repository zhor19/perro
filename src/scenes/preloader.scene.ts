import { Scene } from 'phaser';
import { Bugfender } from '@bugfender/sdk';

export class PreloaderScene extends Scene {
    constructor() {
        super('preloaderScene');
    }

    preload(): void {
        this.load.image('acho', 'acho.png');
        this.load.image('ground', 'ground.png');
        this.load.image('pokemon', 'pokemon.jpg');

        Bugfender.log('Imágenes cargadas correctamente');
    }

    create() {
        Bugfender.log('Assets cargados con éxito. Iniciando GameScene.');
        this.scene.start('GameScene');
    }
}