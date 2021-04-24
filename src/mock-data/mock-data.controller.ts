import { Controller, Post } from '@nestjs/common';
import { MockDataService } from './mock-data.service';
import { BusStop } from '../bus-stops/bus-stop.entity';

@Controller('mock-data')
export class MockDataController {
  constructor(
    private mockDataService: MockDataService
  ){}

  @Post()
  async mockData(): Promise<BusStop[]> {
    return this.mockDataService.mockData();
  }
}
