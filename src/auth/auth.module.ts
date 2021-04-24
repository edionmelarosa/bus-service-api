import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ApplicationRepository } from './application.repository';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';

@Module({
  imports: [
  TypeOrmModule.forFeature([
      ApplicationRepository
    ])
  ],
  controllers: [AuthController, ApplicationsController],
  providers: [AuthService, ApplicationsService]
})
export class AuthModule {}
