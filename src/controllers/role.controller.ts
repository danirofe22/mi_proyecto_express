import { Request, Response } from 'express';
import Role from '../models/role.model';

class RoleController {
    // Crear un nuevo rol
    public async createRole(req: Request, res: Response): Promise<Response> {
        try {
            const { name } = req.body;
            const newRole = await Role.create({ name });
            return res.status(201).json(newRole);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Obtener todos los roles
    public async getAllRoles(req: Request, res: Response): Promise<Response> {
        try {
            const roles = await Role.findAll();
            return res.status(200).json(roles);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Obtener un rol por ID
    public async getRoleById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const role = await Role.findByPk(id);
            if (role) {
                return res.status(200).json(role);
            } else {
                return res.status(404).json({ error: 'Role not found' });
            }
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un rol por ID
    public async updateRole(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const role = await Role.findByPk(id);
            if (role) {
                role.name = name;
                await role.save();
                return res.status(200).json(role);
            } else {
                return res.status(404).json({ error: 'Role not found' });
            }
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un rol por ID
    public async deleteRole(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const role = await Role.findByPk(id);
            if (role) {
                await role.destroy();
                return res.status(200).json({ message: 'Role deleted successfully' });
            } else {
                return res.status(404).json({ error: 'Role not found' });
            }
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new RoleController();
