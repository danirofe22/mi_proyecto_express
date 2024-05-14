import { Sequelize } from "sequelize";

export const sequelizeAuth = async (sequelize: Sequelize) => {
    sequelize.authenticate()
    .then(() => console.log('Autorizacion correcta a la base de datos'))
    .catch((error: any) => console.error('Autorizacíon incorrecta a la base de datos:', error));
}
export const sequelizeSync = async (sequelize: Sequelize) => {
    sequelize.sync({alter: true}).then(() => {
        console.log('Modelos de la base de datos sincronizados correctamente');
    }).catch((error) => {
        console.error('No se pudo establecer conexión con la base de datos:', error);
    });
}
