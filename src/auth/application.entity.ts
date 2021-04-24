import { BaseEntity, Column,Entity, ObjectIdColumn, Unique } from "typeorm";

@Entity()
export class Application extends BaseEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  name: string

  @Unique(['username'])
  @Column()
  username: string
}