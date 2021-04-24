import { Controller, Get, Post } from '@nestjs/common';
import { BusesService } from './buses.service';
import { Bus } from './bus.entity';

@Controller('buses')
export class BusesController {
  constructor(
    private busService: BusesService
  ){}

  @Get()
  async getAllBuses(): Promise<Bus[]> {
    return await this.busService.getAllBuses();
  }
}
