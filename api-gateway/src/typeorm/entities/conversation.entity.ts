import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Participant } from './Participant.entity';

@Entity({ name: 'conversations' })
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Participant, (participant) => participant.conversations)
  participants: Participant[];
}
