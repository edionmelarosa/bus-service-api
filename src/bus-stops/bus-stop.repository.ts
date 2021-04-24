import { Bus } from "src/buses/bus.entity";
import { EntityRepository, Repository } from "typeorm";
import { BusStop } from './bus-stop.entity';

@EntityRepository(BusStop)
export class BusStopRepository extends Repository<BusStop> {
  async createBusStop(): Promise<BusStop> {
    const busStop = new BusStop();
    busStop.name = 'Test'
    busStop.lat = '111'
    busStop.lng = '22222'
    busStop.buses = [
      new Bus('Bus 1', '11:40,'),
      new Bus('Bus 2', '10:40,')
    ]
    await busStop.save()
    return busStop;
  }
}