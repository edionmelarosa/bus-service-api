import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {Strategy, ExtractJwt} from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { ApplicationRepository } from './application.repository';
import { Application } from './application.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(ApplicationRepository)
    private applicationRepository: ApplicationRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: JwtPayload): Promise<Application> {
    const {username} = payload;
    const application = await this.applicationRepository.findOne({username});
    if (!application) {
      throw new UnauthorizedException();
    }

    return application;
  }
}