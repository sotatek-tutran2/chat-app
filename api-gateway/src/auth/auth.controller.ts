import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
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
  async register(@Body() createUserDto: CreateUserDto) {
    const newCreatedUser = await this.usersService.createUser(createUserDto);

    if (!newCreatedUser) {
      throw new HttpException(
        'User already exists with this e-mail',
        HttpStatus.CONFLICT,
      );
    }
    return instanceToPlain(newCreatedUser);
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
