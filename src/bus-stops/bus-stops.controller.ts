import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BusStop } from './bus-stop.entity';
import { BusStopsService } from './bus-stops.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('bus-stops')
@UseGuards(AuthGuard())
export class BusStopsController {
  constructor(
    private busStopService: BusStopsService
  ){}

  @Get()
  async getAllBusStops(): Promise<BusStop[]> {
    return await this.busStopService.getNearestBusStops();
  }

  @Get('/:id')
  async getBusStop(@Param('id') id: string): Promise<BusStop> {
    return await this.busStopService.getBusStop(id);
  }
}
