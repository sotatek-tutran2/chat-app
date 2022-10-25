import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IUsersService } from 'src/users/interfaces/users-service.interface';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from '../utils';
import { CreateUserDto } from './dto/CreateUser.dto';
import { IAuthService } from './interfaces/auth-service.interface';

@Controller(CONTROLLER_PREFIX.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICE_NAMES.AUTH_SERVICE) private authService: IAuthService,
    @Inject(SERVICE_NAMES.USERS_SERVICE) private usersService: IUsersService,
  ) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
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
