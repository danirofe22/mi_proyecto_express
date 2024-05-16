import { Request, Response } from 'express';
import RolePermission from '../models/role-permision.model';
import Role from '../models/role.model';
import Permission from '../models/permission.model';

class RolePermissionController {
    // Crear una nueva relación RolePermission
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { roleId, permissionId } = req.body;
            const rolePermission = await RolePermission.create({ roleId, permissionId });
            return res.status(201).json(rolePermission);
        } catch (error) {
            return res.status(500).json({ message: 'Error al crear la relación RolePermission', error });
        }
    }

    // Obtener todas las relaciones RolePermission
    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const rolePermissions = await RolePermission.findAll({
                include: [Role, Permission]
            });
            return res.status(200).json(rolePermissions);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener las relaciones RolePermission', error });
        }
    }

    // Obtener una relación RolePermission por ID
    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const rolePermission = await RolePermission.findByPk(id, {
                include: [Role, Permission]
            });
            if (!rolePermission) {
                return res.status(404).json({ message: 'Relación RolePermission no encontrada' });
            }
            return res.status(200).json(rolePermission);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener la relación RolePermission', error });
        }
    }

    // Actualizar una relación RolePermission por ID
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { roleId, permissionId } = req.body;
            const rolePermission = await RolePermission.findByPk(id);
            if (!rolePermission) {
                return res.status(404).json({ message: 'Relación RolePermission no encontrada' });
            }
            rolePermission.roleId = roleId;
            rolePermission.permissionId = permissionId;
            await rolePermission.save();
            return res.status(200).json(rolePermission);
        } catch (error) {
            return res.status(500).json({ message: 'Error al actualizar la relación RolePermission', error });
        }
    }

    // Eliminar una relación RolePermission por ID
    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const rolePermission = await RolePermission.findByPk(id);
            if (!rolePermission) {
                return res.status(404).json({ message: 'Relación RolePermission no encontrada' });
            }
            await rolePermission.destroy();
            return res.status(200).json({ message: 'Relación RolePermission eliminada correctamente' });
        } catch (error) {
            return res.status(500).json({ message: 'Error al eliminar la relación RolePermission', error });
        }
    }
}

export default new RolePermissionController();
