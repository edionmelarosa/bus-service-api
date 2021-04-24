import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusRepository } from './bus.repository';
import { Bus } from './bus.entity';

@Injectable()
export class BusesService {
  constructor(
    @InjectRepository(BusRepository)
    private busRepository: BusRepository
  ){}

  async getAllBuses(): Promise<Bus[]> {
    return await this.busRepository.find();
  }

  async createBus(): Promise<Bus> {
    return await this.busRepository.createBus();
  }
}
