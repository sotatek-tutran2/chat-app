import { UserCredentialParams } from 'src/utils';

export interface IAuthService {
  validateUser(userCredentials: UserCredentialParams);
}
