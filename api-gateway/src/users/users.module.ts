import { Module } from '@nestjs/common';
import { SERVICE_NAMES } from 'src/utils';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: SERVICE_NAMES.USERS_SERVICE,
      useClass: UsersService,
    },
  ],
  exports: [{ provide: SERVICE_NAMES.USERS_SERVICE, useClass: UsersService }],
})
export class UsersModule {}
