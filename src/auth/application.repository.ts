import { EntityRepository, Repository } from "typeorm";
import { Application } from './application.entity';
import { SignUpDto } from './signup.dto';

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {
  async signUp(signUpDto: SignUpDto): Promise<Application> {
    const {name} = signUpDto;
    const application = new Application();
    application.name = name;
    await application.save();
    return application;
  }
}