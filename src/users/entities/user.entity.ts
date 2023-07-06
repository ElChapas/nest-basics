import { Column, Entity, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Unique('email', [''])
  @Column()
  email: string;

  @Column({
    type: 'date',
  })
  today: Date;
}
