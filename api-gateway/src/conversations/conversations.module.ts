import { Module } from '@nestjs/common';
import { SERVICE_NAMES } from '../utils';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';

@Module({
  controllers: [ConversationsController],
  providers: [
    {
      provide: SERVICE_NAMES.CONVERSATIONS_SERVICE,
      useClass: ConversationsService,
    },
  ],
})
export class ConversationsModule {}
