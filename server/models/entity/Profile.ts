import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Users } from "./User";

@Entity()
export class Profile extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  genre!: string;
  @Column()
  weight: number;
  @Column()
  count!: string;
  @Column()
  time_record!: string;
  @Column()
  created_At: Date;
  @ManyToOne((type) => Users, (user) => user.profile)
  user: Users;
}
