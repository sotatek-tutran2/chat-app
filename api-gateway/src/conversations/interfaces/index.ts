import { User } from 'src/typeorm';
import { CreateConversationParams } from 'src/utils';

export interface IConversationsService {
  createConversation(
    user: User,
    createConversationDto: CreateConversationParams,
  ): void;
}
