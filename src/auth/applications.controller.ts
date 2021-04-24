import { Body, Controller, Post } from "@nestjs/common";
import { ApplicationsService } from './applications.service';
import { SignUpDto } from './signup.dto';
import { Application } from './application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(
    private applicationsService: ApplicationsService
  ){}

  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto): Promise<Application> {
    return await this.applicationsService.signUp(signUpDto);
  }
}