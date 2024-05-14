//make role sequelize model
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Role extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
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
        tableName: "roles",
        sequelize: sequelize
    }
);

export default Role;