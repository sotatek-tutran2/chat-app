import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
// import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    AuthModule,
    // EventsModule,
  ],
})
export class AppModule {}
