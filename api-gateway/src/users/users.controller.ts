import { Controller, Inject } from '@nestjs/common';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from 'src/utils';
import { IUsersService } from './interfaces/users-service.interface';

@Controller(CONTROLLER_PREFIX.USERS)
export class UsersController {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private usersService: IUsersService,
  ) {}
}
