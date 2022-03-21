import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,ManyToOne, JoinColumn, Relation } from "typeorm";
import { Users } from "./User";

@Entity()
export class Tests extends BaseEntity {
  // 이엔티티 (테이블) 에서 저장 삭제를 하기위해서 baseEntity
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  genre!: string;
  @Column()
  count!: number;
  @Column()
  time_record!: string;

  @ManyToOne(type => Users, user => user.test)
  // @JoinColumn()
  user!: Users;
  
    
}
