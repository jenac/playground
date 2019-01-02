import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({type: 'text', unique: true})
  username: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 11); //11 should be in const
  }

  async comparePassword(attempt: string) : Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}