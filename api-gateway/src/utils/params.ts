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
