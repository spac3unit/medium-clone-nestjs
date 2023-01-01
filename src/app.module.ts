import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag/tag.entity';
import CONNECTION from './db.connection';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './user/middlewares/auth.middleware';
import { ArticleModule } from './article/article.module';
import { ArticleEntity } from './article/article.entity';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...CONNECTION,
      // autoLoadEntities: true,
      // entities: [ArticleEntity, UserEntity],
      // entities: [__dirname + '/../**/*.entity.{ts,js}'],
      // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      synchronize: false,
    }),
    TagModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
