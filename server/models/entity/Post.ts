import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Ex_Records } from "./Ex_Records";
import { Post_Comments } from "./Post_Comment";
import { Post_Likes } from "./Post_Like";
import { Users } from "./User";
import { Record } from "../../models/entity/Record";
@Entity()
export class Posts extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  info: string;
  @Column()
  total_time: number;
  @Column()
  created_At: Date;
  @Column()
  body_Part: string;
  @Column()
  difficult: number;
  @Column({
    default: "http://localhost:4000/postimg/img_post_default.png",
  })
  image: string;

  @ManyToOne((type) => Users, (e) => e.posts, {
    nullable: false,
    onDelete: "CASCADE",
  })
  users: Users;

  @ManyToOne((type) => Record, (e) => e.posts, {
    nullable: false,
    onDelete: "CASCADE",
  })
  exerciseInfo: Record;

  @OneToMany((type) => Post_Comments, (e) => e.post)
  // @JoinColumn({})
  post_comments: Post_Comments[];

  @OneToMany((type) => Post_Likes, (e) => e.post)
  post_likes: Post_Likes[];
}
