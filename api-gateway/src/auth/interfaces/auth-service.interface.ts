import { User } from 'src/typeorm';
import { UserCredentialParams } from 'src/utils';

export interface IAuthService {
  validateUser(userCredentials: UserCredentialParams): Promise<User | null>;
}
