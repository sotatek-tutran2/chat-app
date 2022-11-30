import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsNumber()
  @IsNotEmpty()
  recipientId: number;

  @IsNumber()
  @IsNotEmpty()
  authorId: number;

  @IsString()
  @IsOptional()
  message: string;
}
