import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Participation extends Model {}

Participation.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  matchId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'matches',
      key: 'id',
    }
  },
  playerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'players',
      key: 'id',
    }
  },
  goals: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
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
  modelName: 'Participation',
  tableName: 'participations',
  timestamps: false, // Considera si necesitas los timestamps para este modelo
});

export default Participation;