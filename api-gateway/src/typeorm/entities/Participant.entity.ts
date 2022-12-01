import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Conversation } from './conversation.entity';

@Entity({ name: 'participants' })
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Conversation, (conversation) => conversation.participants)
  @JoinTable()
  conversations: Conversation[];
}
