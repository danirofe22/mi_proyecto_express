import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
    public id!: number;
    public name!: string;
    public surname!: string;
    public user!: string;
    public pass!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public age!: number;
    public email!: string; 
    public isActive!: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          surname: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          user: {
            type: new DataTypes.STRING(128),
            allowNull: false,
            unique: true,
          },
          pass: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          age: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true, 
            validate: {
              isEmail: true,
            },
          },
          isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true, // Opcionalmente, los usuarios pueden estar activos por defecto
          },
    },
    {
        sequelize,
        tableName: 'users',
    }
);

export default User;
