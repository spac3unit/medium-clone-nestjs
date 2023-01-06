import { MigrationInterface, QueryRunner } from "typeorm";

export class test1672928313717 implements MigrationInterface {
    name = 'test1672928313717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" DROP CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc"`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" DROP CONSTRAINT "FK_0132195c2c9670d3785bd2fa023"`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" ADD CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" ADD CONSTRAINT "FK_0132195c2c9670d3785bd2fa023" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" DROP CONSTRAINT "FK_0132195c2c9670d3785bd2fa023"`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" DROP CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc"`);
        await queryRunner.query(`ALTER TABLE "articles_users_favorites_users" ADD CONSTRAINT "FK_0132195c2c9670d3785bd2fa023" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_favorites_articles" ADD CONSTRAINT "FK_61dc60abcf0035e5ce2aea013bc" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
