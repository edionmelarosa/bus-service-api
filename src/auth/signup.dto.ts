import { IsNotEmpty, IsString } from "class-validator";

export class SignUpDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsString()
  name: string
}