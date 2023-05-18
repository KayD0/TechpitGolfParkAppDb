import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionId: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  expirationDateTime: Date;

  @Column()
  otherSessionInfo: string;
}
