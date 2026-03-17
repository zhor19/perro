import * as Phaser from 'phaser';
import { Bugfender } from '@bugfender/sdk';

export class LoginScene extends Phaser.Scene {
    constructor() {
        super('LoginScene');
    }

    create() {
        Bugfender.info('Aplicación iniciada: Mostrando pantalla de acceso.');

        const { width, height } = this.scale;

        this.add.text(width / 2, height / 4, 'PHASER BUG LOGGING', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const loginBtn = this.add.text(width / 2, height / 2, 'EMPEZAR JUEGO', {
            fontSize: '24px',
            backgroundColor: '#2ecc71',
            padding: { x: 20, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        loginBtn.on('pointerdown', () => {

            Bugfender.log('Usuario pulsó el botón de inicio. Transicionando al juego.');
            this.scene.start('preloaderScene'); 
        });
        const error1Btn = this.add.text(width / 2, height / 2 + 80, 'TEST ERROR: REFERENCIA', {
            fontSize: '18px',
            backgroundColor: '#e74c3c',
            padding: { x: 10, y: 5 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        error1Btn.on('pointerdown', () => {
            try {
                const nullObj: any = null;
                nullObj.Fallar();
            } catch (e) {
                Bugfender.error('Error controlado 1: Objeto nulo detectado.');
            }
        });

        // Error Tipo 2: Error de Lógica/Validación
        const error2Btn = this.add.text(width / 2, height / 2 + 130, 'TEST ERROR: LÓGICA', {
            fontSize: '18px',
            backgroundColor: '#f39c12',
            padding: { x: 10, y: 5 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        error2Btn.on('pointerdown', () => {
            try {
                const saldo = -100;
                if (saldo < 0) throw new Error("Saldo negativo no permitido");
            } catch (e) {
                Bugfender.warn('Error controlado 2: Fallo en validación lógica.');
                Bugfender.sendIssue('Validación Fallida', 'El usuario intentó una acción con saldo negativo');
            }
        });
    }
}