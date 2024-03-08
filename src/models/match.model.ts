import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Asegúrate de ajustar la ruta a tu configuración de Sequelize

class Match extends Model {}

Match.init({
  // Definición de los campos del modelo
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  clubId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'clubs', // Esto es el nombre de la tabla de clubs
      key: 'id',
    }
  },
  opponent: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  score: {
    type: DataTypes.STRING(15),
    allowNull: true, // Puede ser opcional si el partido aún no se ha jugado
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true, // Notas adicionales sobre el partido
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP').toString(), // Add this line to update the value on every update
  },
}, {
  sequelize,
  modelName: 'Match',
  tableName: 'matches', // Asegúrate de que el nombre de la tabla coincida con tu esquema de base de datos
  timestamps: false, // Habilita los campos `createdAt` y `updatedAt` automáticos
});

export default Match;
