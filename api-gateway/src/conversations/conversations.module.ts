import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantModule } from 'src/participant/participant.module';
import { Participant, Conversation } from 'src/typeorm';
import { UsersModule } from 'src/users/users.module';
import { SERVICE_NAMES } from '../utils';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation, Participant]),
    ParticipantModule,
    UsersModule,
  ],
  controllers: [ConversationsController],
  providers: [
    {
      provide: SERVICE_NAMES.CONVERSATIONS_SERVICE,
      useClass: ConversationsService,
    },
  ],
})
export class ConversationsModule {}
