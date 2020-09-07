import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { type } from "os";
import { Profile } from "./Profile";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
  
  @Column()
  age: number;

  @Column()
  contactno: string;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;
}


