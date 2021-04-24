import { BaseEntity, Column, Entity, ObjectIdColumn} from "typeorm";
import { Bus } from '../buses/bus.entity';

@Entity()
export class BusStop extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  name: string

  @Column()
  lat: string

  @Column()
  long: string

  @Column(type => Bus)
  buses: Bus[]

  constructor(name: string, lat: string, long: string, buses: Array<Bus>) {
    super();

    this.name = name;
    this.lat = lat;
    this.long = long;
    this.buses = buses
  }
}