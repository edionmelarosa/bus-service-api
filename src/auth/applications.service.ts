import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationRepository } from './application.repository';
import { SignUpDto } from './signup.dto';
import { Application } from './application.entity';
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(ApplicationRepository)
    private applicationRepository: ApplicationRepository,
    private jwtService: JwtService
  ){}

  async signUp(signUpDto: SignUpDto): Promise<{accessToken: string}> {
    const application = await this.applicationRepository.signUp(signUpDto);
    const {name, username} = application;
    const payload: JwtPayload = { name, username }
    const accessToken = await this.jwtService.sign(payload);
    return {accessToken}
  }
}