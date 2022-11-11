import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { SERVICE_NAMES } from 'src/utils';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './passport/LocalStrategy';
import { SessionSerializer } from './passport/Serializer';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
      provide: SERVICE_NAMES.AUTH_SERVICE,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
