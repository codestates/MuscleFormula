import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
//import { Profile } from "./Profile";
import { Posts } from "./Post";
import { Post_Comments } from "./Post_Comment";
import { Post_Likes } from "./Post_Like";
import { Ex_Records } from "./Ex_Record";

@Entity()
export class Users extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  nickname: string;
  @Column({
    default:
      "https://practice-bucket-deploy7.s3.ap-northeast-2.amazonaws.com/default-profile-picture_150.jpg",
  })
  image: string;

  // @OneToMany((type) => Profile, (e) => e.user)
  // profile: Profile[];

  @OneToMany((type) => Posts, (e) => e.users)
  posts: Posts[];
  @OneToMany((type) => Ex_Records, (e) => e.users)
  ex_records: Ex_Records[];

  @OneToMany((type) => Post_Comments, (e) => e.users)
  post_comments: Post_Comments[];

  @OneToMany((type) => Post_Likes, (e) => e.users)
  post_likes: Post_Likes[];
}
