import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config(); // Load variables from .env file 

export const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USERNAME || '',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || '',
        dialect: 'mysql',
        port: Number(process.env.DB_PORT) || 0,
        logging: console.log
    }
);