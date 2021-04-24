import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusStopRepository } from './bus-stop.repository';
import { BusStop } from './bus-stop.entity';

@Injectable()
export class BusStopsService {
  private customerCoordinates;
  private maxDistanceInMeter;

  constructor(
    @InjectRepository(BusStopRepository)
    private busStopRepository: BusStopRepository
  ){
    this.customerCoordinates = [103.837836, 1.334559]
    this.maxDistanceInMeter = 200;
  }

  async getBusStop(id: string): Promise<BusStop> {
    return await this.busStopRepository.findOne(id)
  }

  async getNearestBusStops(): Promise<BusStop[]> {
    return await this.busStopRepository.find({
      where: {
        location: {
          $near: {
            $geometry: {
               type: "Point" ,
               coordinates: this.customerCoordinates
            },
            $maxDistance: this.maxDistanceInMeter
          }
        }
      }
    });
  }
}
