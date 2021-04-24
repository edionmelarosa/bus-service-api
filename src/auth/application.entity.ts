import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Application extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  name: string
}