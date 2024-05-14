import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Permission from './permission.model';
import Role from './role.model';

class RolePermission extends Model {
    public id!: number;
    public roleId!: number;
    public permissionId!: number;

    // Other fields and methods can be added here

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

RolePermission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'RolePermission',
        tableName: 'role_permissions',
    }
);

Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'roleId' });
Permission.belongsToMany(Role, { through: RolePermission, foreignKey: 'permissionId' });

export default RolePermission;