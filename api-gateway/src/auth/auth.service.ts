import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/interfaces/users-service.interface';
import { compareHash, SERVICE_NAMES, UserCredentialParams } from 'src/utils';
import { IAuthService } from './interfaces/auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private usersService: IUsersService,
  ) {}

  async validateUser(userCredentialParams: UserCredentialParams) {
    const user = await this.usersService.findUser({
      email: userCredentialParams.email,
    });
    if (!user)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    const isValid = await compareHash(
      userCredentialParams.password,
      user.password,
    );
    return isValid;
  }
}
