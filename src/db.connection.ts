import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

const CONNECTION: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as any,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default CONNECTION;
// https://github.com/typeorm/typeorm/issues/8905
// https://github.com/typeorm/typeorm/issues/8860
