export interface IRegisterFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export interface ICreateConversationFormData {
  recipient: string;
  message?: string;
}
