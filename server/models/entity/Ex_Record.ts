import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Post_Comments } from "./Post_Comment";
import { Post_Likes } from "./Post_Like";
import { Records } from "./Record";
import { Users } from "./User";

@Entity()
export class Ex_Records extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  created_at: Date;
  @ManyToOne((type) => Users, (e) => e.ex_records)
  users: Users;
  @OneToMany((type) => Records, (e) => e.records_)
  records_: Records[];
}
