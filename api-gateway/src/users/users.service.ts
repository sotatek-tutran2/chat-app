import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserParams, FindUserParams, hashPassword } from 'src/utils';
import { Repository } from 'typeorm';
import { IUsersService } from './interfaces/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async createUser(userParams: CreateUserParams) {
    const findUser = await this.usersRepository.findOne({
      email: userParams.email,
    });

    if (findUser) {
      return null;
    }

    const password = await hashPassword(userParams.password);
    const newUser = this.usersRepository.create({
      ...userParams,
      password: password,
    });
    return this.usersRepository.save(newUser);
  }

  async findUser(findUserParams: FindUserParams) {
    return this.usersRepository.findOne(findUserParams, {
      relations: ['participant'],
    });
  }

  async saveUser(user: User) {
    return this.usersRepository.save(user);
  }
}
