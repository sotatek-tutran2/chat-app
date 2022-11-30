import { CreateConversationParams } from 'src/utils';

export interface IConversationsService {
  createConversation(createConversationDto: CreateConversationParams): void;
}
