import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const AppDataSource = new DataSource({
    type: 'mongodb',
    url: 'mongodb://127.0.0.1:27017',
    synchronize: false,
    logging: false,
    entities: ['src/entities/**/*.entity.ts'],
    database: 'astrologybar',
});

