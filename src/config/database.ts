import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config(); // Load variables from .env file 

export const test = () => {
    console.log(process.env);
    
    console.log('test');
}


export const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || '',
        dialect: 'mysql',
        port: Number(process.env.DB_PORT) || 0,
        logging: console.log
    }
);



// const databaseConfig = {
//     host: process.env.DB_HOST || '',
//     port: process.env.DB_PORT || '',
//     username: process.env.DB_USERNAME || '',
//     password: process.env.DB_PASSWORD || '',
//     database: process.env.DB_NAME || '',
// };

// module.exports = databaseConfig;
