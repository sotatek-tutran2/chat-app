import { CreateUserParams } from 'src/utils';

export interface IUsersService {
  createUser(userParams: CreateUserParams);
}
