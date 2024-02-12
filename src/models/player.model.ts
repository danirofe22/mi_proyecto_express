import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Ajusta la ruta a tu configuración de Sequelize

class Player extends Model {}

Player.init({
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
  surname: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(128),
    allowNull: true, // El apodo es opcional
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING(128),
    allowNull: true, // La posición en la que juega puede ser opcional
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  clubId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    references: {
      model: 'clubs', // Asume que ya tienes un modelo 'Club'
      key: 'id',
    }
  }
}, {
  sequelize,
  modelName: 'Player',
  tableName: 'players',
  timestamps: true, // Habilita los campos `createdAt` y `updatedAt` automáticos
});

export default Player;