import { Module } from '@nestjs/common';
import { MockDataService } from './mock-data.service';
import { MockDataController } from './mock-data.controller';
import { BusStopsService } from '../bus-stops/bus-stops.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusStopRepository } from '../bus-stops/bus-stop.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BusStopRepository
    ])
  ],
  providers: [MockDataService, BusStopsService],
  controllers: [MockDataController]
})
export class MockDataModule {}
