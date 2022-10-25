import { Injectable } from '@nestjs/common';
import { IAuthService } from './interfaces/auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
  validateUser() {
    console.log('validate user success');
  }
}
