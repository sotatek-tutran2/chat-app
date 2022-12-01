import { User } from 'src/typeorm';
import { CreateUserParams, FindUserParams } from 'src/utils';

export interface IUsersService {
  createUser(userParams: CreateUserParams);
  findUser(findUserParams: FindUserParams): Promise<User>;
  saveUser(user: User): Promise<User>;
}
