import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusStopRepository } from './busStop.repository';
import { BusStopsService } from './buses.service';
import { BusStopsController } from './busStops.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    TypeOrmModule.forFeature([BusStopRepository])
  ],
  providers: [BusStopsService],
  controllers: [BusStopsController]
})
export class BusStopsModule {}
