import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column({type: 'text', nullable: true})
  description: string;


  setTitle(value) {
    this.title = value;
    return this;
  }

}