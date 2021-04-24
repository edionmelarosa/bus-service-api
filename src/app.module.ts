import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesModule } from './buses/buses.module';
import { Bus } from './buses/bus.entity';
import { BusStopsModule } from './busStops/busStops.module';
import { BusStop } from './busStops/busStop.entity';
import { ConfigModule } from '@nestjs/config';

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
      entities: [Bus, BusStop]
    }),
    BusesModule,
    BusStopsModule
  ],
})
export class AppModule {}
