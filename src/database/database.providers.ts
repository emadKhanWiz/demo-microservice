import { Sequelize } from 'sequelize-typescript';
import { Account } from './account.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'WizTech123a#@!',
        database: 'test',
      });
      sequelize.addModels([Account]);
      await sequelize.sync();
      return sequelize;
    },
  },
];