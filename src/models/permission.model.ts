
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Permission extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Permission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
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
        }
    },
    {
        sequelize,
        modelName: 'Permission',
        tableName: 'permissions',
    }
);

export default Permission;