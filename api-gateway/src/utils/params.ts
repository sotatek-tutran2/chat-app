import { Request } from 'express';
import { User } from 'src/typeorm';

export type CreateUserParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserCredentialParams = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;

export type CreateConversationParams = {
  authorId: number;
  recipientId: number;
  message: string;
};

export type ConversationIdentityType = 'author' | 'recipient';

export type FindParticipantParams = Partial<{
  id: number;
}>;

export interface AuthenticatedRequest extends Request {
  user: User;
}

export type CreateParticipantParams = {
  id: number;
};
