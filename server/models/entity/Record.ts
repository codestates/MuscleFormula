import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Ex_Records } from "./Ex_Records";
import { Users } from "./User";
import { Posts } from "./Post";
@Entity()
export class Record extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  created_at: Date;
  @ManyToOne((type) => Users, (e) => e.ex_records, {
    nullable: false,
    onDelete: "CASCADE",
  })
  users: Users;
  @OneToMany((type) => Ex_Records, (e) => e.record)
  ex_record: Ex_Records[];
  @OneToMany((type) => Posts, (e) => e.exerciseInfo)
  posts: Posts[];
}
