import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest_api_hello',
  autoLoadEntities: true,
  synchronize: true,
};
