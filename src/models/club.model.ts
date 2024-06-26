import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Club extends Model {}

Club.init({
  // Definición de los campos del modelo
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  creator_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'users', // Esto es el nombre de la tabla
      key: 'id',
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Permitir que la descripción sea opcional
  },
  location: {
    type: DataTypes.STRING(128),
    allowNull: true, // Permitir que la ubicación sea opcional
  }
}, {
  sequelize,
  modelName: 'Club',
  tableName: 'clubs', // Asegúrate de que el nombre de la tabla coincida con tu esquema de base de datos
  //TODO: Agregar el campo `timestamps` con el valor `true`
  timestamps: false, // Habilita los campos `createdAt` y `updatedAt` automáticos
});

export default Club;