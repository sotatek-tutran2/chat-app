import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/passport/Guards';
import { CONTROLLER_PREFIX, SERVICE_NAMES } from 'src/utils';
import { CreateConversationDto } from './dto';
import { IConversationsService } from './interfaces';

@Controller(CONTROLLER_PREFIX.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(SERVICE_NAMES.CONVERSATIONS_SERVICE)
    private readonly conversationsService: IConversationsService,
  ) {}

  @Post()
  createConversation(@Body() createConversationDto: CreateConversationDto) {
    this.conversationsService.createConversation(createConversationDto);
  }
}
