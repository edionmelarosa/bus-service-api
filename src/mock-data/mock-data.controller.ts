import { Controller } from '@nestjs/common';
import { MockDataService } from './mock-data.service';

@Controller('mock-data')
export class MockDataController {
  constructor(
    private mockDataService: MockDataService
  ){}

  async mockData(): Promise<any> {
    return this.mockDataService.mockData();
  }
}
