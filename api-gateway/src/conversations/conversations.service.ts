import { Injectable } from '@nestjs/common';
import { CreateConversationParams } from 'src/utils';
import { IConversationsService } from './interfaces';

@Injectable()
export class ConversationsService implements IConversationsService {
  createConversation(createConversationParams: CreateConversationParams): void {
    console.log('conversation created');
  }
}
