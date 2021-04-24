import { Controller, Get, Post } from '@nestjs/common';
import { BusStop } from './busStop.entity';
import { BusStopsService } from './buses.service';

@Controller('buses')
export class BusStopsController {
  constructor(
    private busStopService: BusStopsService
  ){}

  @Get()
  async getAllBusStops(): Promise<BusStop[]> {
    return await this.busStopService.getAllBusStops();
  }

  @Post()
  async createBusStop(): Promise<BusStop> {
    return await this.busStopService.createBusStop();
  }
}
