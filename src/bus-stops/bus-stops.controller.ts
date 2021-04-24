import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BusStop } from './bus-stop.entity';
import { BusStopsService } from './bus-stops.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('busStops')
export class BusStopsController {
  constructor(
    private busStopService: BusStopsService
  ){}

  @Get()
  @UseGuards(AuthGuard())
  async getAllBusStops(): Promise<BusStop[]> {
    return await this.busStopService.getAllBusStops();
  }

  @Post()
  async createBusStop(): Promise<BusStop> {
    return await this.busStopService.createBusStop();
  }
}
