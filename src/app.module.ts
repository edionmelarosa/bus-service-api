import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesModule } from './buses/buses.module';
import { Bus } from './buses/bus.entity';
import { BusStopsModule } from './busStops/busStops.module';
import { BusStop } from './busStops/busStop.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Application } from './auth/application.entity';

@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Bus, BusStop, Application]
    }),
    BusesModule,
    BusStopsModule,
    AuthModule
  ],
})
export class AppModule {}
