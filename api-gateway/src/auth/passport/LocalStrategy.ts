import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SERVICE_NAMES } from 'src/utils';
import { IAuthService } from '../interfaces/auth-service.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(SERVICE_NAMES.AUTH_SERVICE)
    private readonly authService: IAuthService,
  ) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(email: string, password: string) {
    const result = await this.authService.validateUser({ email, password });
    return result;
  }
}
