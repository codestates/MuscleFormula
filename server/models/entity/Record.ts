import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Ex_Records } from "./Ex_Record";
import { Post_Comments } from "./Post_Comment";
import { Post_Likes } from "./Post_Like";
import { Users } from "./User";

@Entity()
export class Records extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  genre: string;
  @Column()
  count: number;
  @Column()
  time_record: number;
  @Column()
  weight: number;
  @ManyToOne((type) => Ex_Records, (e) => e.records_, {
    nullable: false,
    onDelete: "CASCADE",
  })
  records_: Ex_Records;
}
