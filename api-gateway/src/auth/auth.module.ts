import { Module } from '@nestjs/common';
import { SERVICE_NAMES } from 'src/utils';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: SERVICE_NAMES.AUTH_SERVICE,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
