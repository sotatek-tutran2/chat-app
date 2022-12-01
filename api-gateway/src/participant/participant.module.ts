import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from 'src/typeorm';
import { SERVICE_NAMES } from 'src/utils';
import { ParticipantService } from './participant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [
    {
      provide: SERVICE_NAMES.PARTICIPANT_SERVICE,
      useClass: ParticipantService,
    },
  ],
  exports: [
    {
      provide: SERVICE_NAMES.PARTICIPANT_SERVICE,
      useClass: ParticipantService,
    },
  ],
})
export class ParticipantModule {}
