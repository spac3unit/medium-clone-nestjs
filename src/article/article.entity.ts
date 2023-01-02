import { UserEntity } from '../user/user.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'articles' }) //table name
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('simple-array')
  tagList: string[];

  @Column({ default: 0 })
  favoritesCount: number;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @ManyToOne(() => UserEntity, (user) => user.articles, { eager: true }) // add article.author field to response
  author: UserEntity;

  @ManyToMany((type) => UserEntity)
  @JoinTable()
  usersFavorites: UserEntity[];

  // "article": {
  //   "slug": "how-to-train-your-dragon",
  //   "title": "How to train your dragon",
  //   "description": "Ever wonder how?",
  //   "body": "It takes a Jacobian",
  //   "tagList": ["dragons", "training"],
  //   "createdAt": "2016-02-18T03:22:56.637Z",
  //   "updatedAt": "2016-02-18T03:48:35.824Z",
  //   "favorited": false,
  //   "favoritesCount": 0,
  //   "author": {
  //     "username": "jake",
  //     "bio": "I work at statefarm",
  //     "image": "https://i.stack.imgur.com/xHWG8.jpg",
  //     "following": false
  //   }
  // }
}
