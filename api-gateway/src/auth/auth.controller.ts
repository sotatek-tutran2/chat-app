import { Controller, Inject } from '@nestjs/common';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from '../utils';
import { IAuthService } from './interfaces/auth.interface';

@Controller(CONTROLLER_PREFIX.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICE_NAMES.AUTH_SERVICE) private authService: IAuthService,
  ) {}
}
