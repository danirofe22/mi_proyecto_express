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
  creation_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
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
  timestamps: false, // Desactiva los campos `createdAt` y `updatedAt` automáticos si no los necesitas
});

export default Club;