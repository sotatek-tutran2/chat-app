import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  password: string;
}
