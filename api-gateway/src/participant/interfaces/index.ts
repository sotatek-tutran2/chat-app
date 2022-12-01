import { Participant } from 'src/typeorm';
import { CreateParticipantParams, FindParticipantParams } from 'src/utils';

export interface IParticipantService {
  findParticipant(params: FindParticipantParams): Promise<Participant | null>;
  createParticipant(params: CreateParticipantParams): Promise<Participant>;
  // findOrCreateParticipant(): Promise<Participant | null>;
}
