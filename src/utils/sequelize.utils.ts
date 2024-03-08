import { Sequelize } from "sequelize";

export const sequelizeAuth = async (sequelize: Sequelize) => {
    sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch((error: any) => console.error('No se pudo conectar a la base de datos:', error));
}
export const sequelizeSync = async (sequelize: Sequelize) => {
    sequelize.sync({alter: false}).then(() => {
        console.log('Conexión a la base de datos establecida y modelos sincronizados');
    }).catch((error) => {
        console.error('No se pudo establecer conexión con la base de datos:', error);
    });
}
