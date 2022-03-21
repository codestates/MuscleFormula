import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Profile } from "./Profile";

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

  @OneToMany((type) => Profile, (profile) => profile.user)
  profile: Profile[];
}
