import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
