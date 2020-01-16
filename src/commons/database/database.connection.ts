import { ENTITIES } from './entity.loader';

export const DatabaseConnection = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Cristiano007',
  database: 'survey',
  entities: ENTITIES,
  synchronize: true,
}