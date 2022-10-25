import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from '../utils';
import { CreateUserDto } from './dto/CreateUser.dto';
import { IAuthService } from './interfaces/auth.interface';

@Controller(CONTROLLER_PREFIX.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICE_NAMES.AUTH_SERVICE) private authService: IAuthService,
  ) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Post('login')
  login() {
    return 'register';
  }

  @Get()
  status() {
    return 'register';
  }

  @Post('logout')
  logout() {
    return 'register';
  }
}
