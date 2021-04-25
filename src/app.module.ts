import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesModule } from './buses/buses.module';
import { Bus } from './buses/bus.entity';
import { BusStopsModule } from './bus-stops/bus-stops.module';
import { BusStop } from './bus-stops/bus-stop.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Application } from './auth/application.entity';
import { MockDataModule } from './mock-data/mock-data.module';

@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URI,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Bus, BusStop, Application]
    }),
    BusesModule,
    BusStopsModule,
    AuthModule,
    MockDataModule
  ],
})
export class AppModule {}
