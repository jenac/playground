import { IsNotEmpty } from 'class-validator';

export class CredDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}