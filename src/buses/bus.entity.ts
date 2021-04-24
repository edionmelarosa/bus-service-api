import { BaseEntity, Column, Entity, ManyToOne, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BusStop } from '../busStops/busStop.entity';

@Entity()
export class Bus extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  arrivalTime: string

  @ManyToOne(() => BusStop, busStop => busStop.buses)
  busStop: BusStop
}