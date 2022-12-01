import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/typeorm';
import { CreateParticipantParams, FindParticipantParams } from 'src/utils';
import { Repository } from 'typeorm';
import { IParticipantService } from './interfaces';

@Injectable()
export class ParticipantService implements IParticipantService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}
  createParticipant(params: CreateParticipantParams): Promise<Participant> {
    const newParticipant = this.participantRepository.create({
      ...params,
    });
    return this.participantRepository.save(newParticipant);
  }

  findParticipant(params: FindParticipantParams): Promise<Participant | null> {
    return this.participantRepository.findOne(params);
  }
}
