import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany, JoinColumn, Relation  } from "typeorm";
import { Tests } from "./Test";

@Entity()
export class Users extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    unique: true,
  })
  email!: string;
  @Column()
  password!: string;
  @Column()
  nickname!: string;
  @Column()
  image!: string;

  @OneToMany(type => Tests, test => test.user)

  // @JoinColumn()
  test!: Tests[];
  
}
