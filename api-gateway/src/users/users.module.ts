import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { SERVICE_NAMES } from 'src/utils';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
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
