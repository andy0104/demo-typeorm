import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { getConnection } from 'typeorm';

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
}


