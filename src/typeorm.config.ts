import { DataSource } from 'typeorm';
import CONNECTION from './db.connection';

const AppDataSource = new DataSource({
  ...CONNECTION,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
// https://github.com/typeorm/typeorm/issues/8905
// https://github.com/typeorm/typeorm/issues/8860
