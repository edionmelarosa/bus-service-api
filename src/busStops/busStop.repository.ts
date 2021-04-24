import { EntityRepository, Repository } from "typeorm";
import { BusStop } from './busStop.entity';

@EntityRepository(BusStop)
export class BusStopRepository extends Repository<BusStop> {
  async createBusStop(): Promise<BusStop> {
    const busStop = new BusStop();
    busStop.name = 'Test'
    await busStop.save()
    return busStop;
  }
}