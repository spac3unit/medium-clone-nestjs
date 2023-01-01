require('module-alias/register');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// const pgstring = 'postgres://spac3unit:Mqkshz4Nj5rn@ep-floral-king-134993.eu-central-1.aws.neon.tech/neondb'
// https://console.neon.tech/app/projects/restless-wildflower-870560

// local Docker:
// docker run --name postgres -e POSTGRES_PASSWORD=123 -d postgres
// user: postgres, pwd: 123
// docker-compose up -d
// docker exec -it e709aff07917 /bin/bash
// psql -h localhost -U postgres
// https://earthly.dev/blog/postgres-docker/

// pnpm run typeorm migration:generate src/migrations/CreateArticles -d src/typeorm.config.ts
// \dt = describe tables
// \d users; = describe users table
