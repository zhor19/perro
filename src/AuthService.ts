import { Bugfender } from '@bugfender/sdk';

export class AuthService {
    static login(username: string): boolean {
        Bugfender.info(`Intento de login para el usuario: ${username}`);
        
        if (username.length < 3) {
            Bugfender.error('Error de validación: El nombre es demasiado corto');
            throw new Error("Nombre de usuario inválido");
        }
        
        Bugfender.setDeviceKey('username', username);
        Bugfender.log('Login exitoso. Redirigiendo al juego...');
        return true;
    }
}