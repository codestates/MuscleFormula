import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Posts } from "./Post";
import { Users } from "./User";

@Entity()
export class Post_Comments extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  comment: string;
  @Column()
  created_At: Date;

  @ManyToOne((type) => Users, (e) => e.post_comments, {
    nullable: false,
    onDelete: "CASCADE",
  })
  users: Users;

  @ManyToOne((type) => Posts, (e) => e.post_comments, {
    nullable: false,
    onDelete: "CASCADE",
  })
  post: Posts;
}
