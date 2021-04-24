import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ApplicationRepository } from './application.repository';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '30 days'
      }
    }),
    TypeOrmModule.forFeature([
      ApplicationRepository
    ])
  ],
  controllers: [AuthController, ApplicationsController],
  providers: [AuthService, ApplicationsService]
})
export class AuthModule {}
