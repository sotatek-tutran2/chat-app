import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/passport/Guards';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from 'src/utils';
import { CreateConversationDto } from './dto';
import { IConversationsService } from './interfaces';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/typeorm';

@Controller(CONTROLLER_PREFIX.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(SERVICE_NAMES.CONVERSATIONS_SERVICE)
    private readonly conversationsService: IConversationsService,
  ) {}

  @Post()
  createConversation(
    @AuthUser() user: User,
    @Body() createConversationDto: CreateConversationDto,
  ) {
    this.conversationsService.createConversation(user, createConversationDto);
  }
}
