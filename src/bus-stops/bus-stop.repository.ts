import { EntityRepository, Repository } from "typeorm";
import { BusStop } from './bus-stop.entity';

@EntityRepository(BusStop)
export class BusStopRepository extends Repository<BusStop> {
}