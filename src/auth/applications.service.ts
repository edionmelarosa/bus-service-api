import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationRepository } from './application.repository';
import { SignUpDto } from './signup.dto';
import { Application } from './application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(ApplicationRepository)
    private applicationRepository: ApplicationRepository
  ){}

  async signUp(signUpDto: SignUpDto): Promise<Application> {
    return await this.applicationRepository.signUp(signUpDto);
  }
}