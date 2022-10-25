import { Injectable } from '@nestjs/common';
import { CreateUserParams } from 'src/utils';
import { IUsersService } from './interfaces/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
  createUser(userParams: CreateUserParams) {
    console.log('created user');
  }
}
