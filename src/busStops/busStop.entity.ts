import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Bus } from '../buses/bus.entity';

@Entity()
export class BusStop extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  lat: string

  @Column()
  lng: string

  @OneToMany(() => Bus, bus => bus.busStop)
  buses: Bus[]
}