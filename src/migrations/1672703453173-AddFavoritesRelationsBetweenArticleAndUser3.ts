import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFavoritesRelationsBetweenArticleAndUser31672703453173 implements MigrationInterface {
    name = 'AddFavoritesRelationsBetweenArticleAndUser31672703453173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoritesCount" integer NOT NULL DEFAULT '0', "authorId" integer, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_favorites_articles" ("usersId" integer NOT NULL, "articlesId" integer NOT NULL, CONSTRAINT "PK_aebb5070a5fa58957adae6d78af" PRIMARY KEY ("usersId", "articlesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b3bc5ca3e98f5f3858dbf626ad" ON "users_favorites_articles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_61dc60abcf0035e5ce2aea013b" ON "users_favorites_articles" ("articlesId") `);
        await queryRunner.query(`CREATE TABLE "articles_users_favorites_users" ("articlesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_e60f00b99782db98cb205cb9579" PRIMARY KEY ("articlesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2f3045e15d788d754d1d52a49c" ON "articles_users_favorites_users" ("articlesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0132195c2c9670d3785bd2fa02" ON "articles_users_favorites_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" ADD CONSTRAINT "FK_b3bc5ca3e98f5f3858dbf626ad6" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" ADD CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" ADD CONSTRAINT "FK_2f3045e15d788d754d1d52a49c6" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" ADD CONSTRAINT "FK_0132195c2c9670d3785bd2fa023" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" DROP CONSTRAINT "FK_0132195c2c9670d3785bd2fa023"`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" DROP CONSTRAINT "FK_2f3045e15d788d754d1d52a49c6"`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" DROP CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc"`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" DROP CONSTRAINT "FK_b3bc5ca3e98f5f3858dbf626ad6"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0132195c2c9670d3785bd2fa02"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2f3045e15d788d754d1d52a49c"`);
        await queryRunner.query(`DROP TABLE "articles_users_favorites_users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_61dc60abcf0035e5ce2aea013b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b3bc5ca3e98f5f3858dbf626ad"`);
        await queryRunner.query(`DROP TABLE "users_favorites_articles"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
