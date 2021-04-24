import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusStopRepository } from './busStop.repository';
import { BusStop } from './busStop.entity';

@Injectable()
export class BusStopsService {
  constructor(
    @InjectRepository(BusStopRepository)
    private busStopRepository: BusStopRepository
  ){}

  async getAllBusStops(): Promise<BusStop[]> {
    return await this.busStopRepository.find();
  }

  async createBusStop(): Promise<BusStop> {
    return await this.busStopRepository.createBusStop();
  }
}
