import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusStopRepository } from './bus-stop.repository';
import { BusStop } from './bus-stop.entity';

@Injectable()
export class BusStopsService {
  constructor(
    @InjectRepository(BusStopRepository)
    private busStopRepository: BusStopRepository
  ){}

  async getAllBusStops(): Promise<BusStop[]> {
    return await this.busStopRepository.find({
      relations: ['buses']
    });
  }

  async createBusStop(): Promise<BusStop> {
    return await this.busStopRepository.createBusStop();
  }
}
