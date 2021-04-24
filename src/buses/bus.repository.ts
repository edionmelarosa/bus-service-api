import { EntityRepository, Repository } from "typeorm";
import { Bus } from './bus.entity';

@EntityRepository(Bus)
export class BusRepository extends Repository<Bus> {
  async createBus(): Promise<Bus> {
    const bus = new Bus();
    bus.name = 'Test'
    bus.arrivalTime = '10:20'
    await bus.save()
    return bus;
  }
}