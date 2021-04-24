import { BaseEntity, Column, Entity, ManyToOne, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BusStop } from '../bus-stops/bus-stop.entity';

@Entity()
export class Bus extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  arrivalTime: string;

  constructor(name: string, arrivalTime: string) {
    super();
    this.name = name;
    this.arrivalTime = arrivalTime;
  }
}