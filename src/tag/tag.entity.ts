import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' }) // имя таблицы множственное число, иначе было бы как в имени класса -> Tag
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
