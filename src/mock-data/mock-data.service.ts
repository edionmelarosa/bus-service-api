import { Injectable } from '@nestjs/common';
import { Bus } from 'src/buses/bus.entity';
import { getMongoRepository } from 'typeorm';
import { BusStop } from '../bus-stops/bus-stop.entity';

@Injectable()
export class MockDataService {
  constructor(
  ) {}
  async mockData(): Promise<BusStop[]> {
    const busStops = [
      {
        name: 'Bus Stop 1', 
        lat: '1.369256', 
        long: '103.828619', 
        location: {
          type: 'Point',
          coordinates: [103.83972077425295, 1.335083707317516] // 216.73
        },
        buses: [
          new Bus('Bus 1', '10:00,'),
          new Bus('Bus 2', '10:10,')
        ]
      },
      {
        name: 'Bus Stop 2', 
        lat: '1.358702', 
        long: '103.829048', 
        location: {
          type: 'Point',
          coordinates: [103.83770217768149, 1.3355637716640834] // 112.56
        },
        buses: [
          new Bus('Bus 3', '10:00,'),
          new Bus('Bus 4', '10:15,')
        ]
      },
      {
        name: 'Bus Stop 3', 
        lat: '1.350636', 
        long: '103.836601', 
        location: {
          type: 'Point',
          coordinates: [103.8367773581069, 1.3340969080885703] // 126.54
        },
        buses: [
          new Bus('Bus 5', '10:00,'),
          new Bus('Bus 6', '10:15,')
        ]
      },
      {
        name: 'Bus Stop 4', 
        lat: '1.350636', 
        long: '103.836601', 
        location: {
          type: 'Point',
          coordinates: [103.83611931340961, 1.3340613477486005] // 202.12
        },
        buses: [
          new Bus('Bus 7', '10:00,'),
          new Bus('Bus 8', '10:15,')
        ]
      }
    ]

    const busStopRepository = getMongoRepository(BusStop);
    await busStopRepository.insertMany(busStops)
    return await busStopRepository.find({});
  }
}
