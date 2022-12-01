import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateConversationParams, SERVICE_NAMES } from 'src/utils';
import { Repository } from 'typeorm';
import { IConversationsService } from './interfaces';
import { Conversation, Participant, User } from 'src/typeorm';
import { IParticipantService } from 'src/participant/interfaces';
import { IUsersService } from 'src/users/interfaces/users-service.interface';

@Injectable()
export class ConversationsService implements IConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(SERVICE_NAMES.PARTICIPANT_SERVICE)
    private readonly participantService: IParticipantService,
    @Inject(SERVICE_NAMES.USERS_SERVICE)
    private readonly usersService: IUsersService,
  ) {}

  async createConversation(
    user: User,
    createConversationParams: CreateConversationParams,
  ): Promise<void> {
    const foundUser = await this.usersService.findUser({ id: user.id });
    const participants: Participant[] = [];

    if (!foundUser.participant) {
      const participant = await this.createParticipantAndSaveUser(
        createConversationParams.authorId,
        foundUser,
      );
      participants.push(participant);
    }

    // const author = await this.participantService.findParticipant();
    const recipient = await this.usersService.findUser({
      id: createConversationParams.recipientId,
    });

    if (!recipient) {
      throw new HttpException(
        'User Not Found, Can not create conversation',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!recipient.participant) {
      await this.createParticipantAndSaveUser(
        createConversationParams.recipientId,
        recipient,
      );
    }

    this.conversationRepository.create({ participants: [] });
  }

  public async createParticipantAndSaveUser(id: number, user: User) {
    const participant = await this.participantService.createParticipant({
      id,
    });
    user.participant = participant;
    await this.usersService.saveUser(user);
    return participant;
  }
}
