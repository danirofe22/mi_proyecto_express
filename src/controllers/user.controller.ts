import { Request, Response } from 'express';
import User from '../models/user.model';
import { getErrorData } from '../utils/handleError';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error : any) {
    res.status(500).json(getErrorData(error));
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error : any) {

    res.status(500).json(getErrorData(error));
  }
};

export const editUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.update(req.body, { where: { id } });
    res.json({ message: "Usuario actualizado" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });
        res.json({ message: "Usuario eliminado" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
