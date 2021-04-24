import { BaseEntity, Column, Entity, ObjectIdColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
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
  lng: string

  @Column(type => Bus)
  buses: Bus[]
}