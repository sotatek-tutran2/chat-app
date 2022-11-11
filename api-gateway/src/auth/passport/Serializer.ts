/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { IUsersService } from 'src/users/interfaces/users-service.interface';
import { SERVICE_NAMES } from 'src/utils';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(SERVICE_NAMES.AUTH_SERVICE)
    private readonly usersService: IUsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Function) {
    const usr = await this.usersService.findUser({ id: user.id });
    return usr ? done(null, usr) : done(null, null);
  }
}
