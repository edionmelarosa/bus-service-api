import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

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