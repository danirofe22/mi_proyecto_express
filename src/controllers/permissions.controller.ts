import { Request, Response } from 'express';
import Permission from '../models/permission.model';

export const getAllPermissions = async (req: Request, res: Response) => {
    try {
        const permissions = await Permission.findAll();
        res.json(permissions);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const getPermissionById = async (req: Request, res: Response) => {
    try {
        const permission = await Permission.findByPk(req.params.id);
        if (permission) {
            res.json(permission);
        } else {
            res.status(404).send('Permission not found');
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const createPermission = async (req: Request, res: Response) => {
    try {
        const permission = await Permission.create(req.body);
        res.status(201).json(permission);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const updatePermission = async (req: Request, res: Response) => {
    try {
        const permission = await Permission.findByPk(req.params.id);
        if (permission) {
            await permission.update(req.body);
            res.json(permission);
        } else {
            res.status(404).send('Permission not found');
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const deletePermission = async (req: Request, res: Response) => {
    try {
        const permission = await Permission.findByPk(req.params.id);
        if (permission) {
            await permission.destroy();
            res.status(204).send('Permission deleted successfully');
        } else {
            res.status(404).send('Permission not found');
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};