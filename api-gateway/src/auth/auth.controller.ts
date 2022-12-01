import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { IUsersService } from 'src/users/interfaces/users-service.interface';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from '../utils';
import { CreateUserDto } from './dto';
import { IAuthService } from './interfaces/auth-service.interface';
import { LocalAuthGuard, AuthenticatedGuard } from './passport/Guards';

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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login() {
    console.log('logged in');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  status(@Req() req: Request) {
    return instanceToPlain(req.user);
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}
