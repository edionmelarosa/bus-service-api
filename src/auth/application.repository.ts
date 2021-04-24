import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Application } from './application.entity';
import { SignUpDto } from './signup.dto';

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {
  async signUp(signUpDto: SignUpDto): Promise<Application> {
    const {name, username} = signUpDto;
    const application = new Application();
    application.name = name;
    application.username = username;

    try {
      await application.save();
      return application;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException("Application username already exist");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}