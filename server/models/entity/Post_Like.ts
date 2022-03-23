import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";
import { Posts } from "./Post";
import { Users } from "./User";

@Entity()
export class Post_Likes extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Users, (e) => e.post_likes)
  users: Users;

  @ManyToOne((type) => Posts, (e) => e.post_likes)
  post: Posts;
}
