import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GenerateTokenDto } from './generate-token.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}

  // @Post()
  // async generateToken(@Body() generateTokenDto: GenerateTokenDto): Promise<>
}
