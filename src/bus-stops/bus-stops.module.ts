import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusStopRepository } from './bus-stop.repository';
import { BusStopsService } from './bus-stops.service';
import { BusStopsController } from './bus-stops.controller';
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
