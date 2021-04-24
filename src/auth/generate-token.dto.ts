import { IsNotEmpty, IsString } from "class-validator";

export class GenerateTokenDto {
  @IsNotEmpty()
  @IsString()
  key: string
}