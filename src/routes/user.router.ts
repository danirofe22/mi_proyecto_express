import { Router } from 'express';
import * as usuarioController from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('/usuarios', usuarioController.createUser);
userRoutes.get('/usuarios', usuarioController.getUsers);
userRoutes.put('/usuarios/:id', usuarioController.editUser);
userRoutes.delete('/usuarios/:id', usuarioController.deleteUser);

export default userRoutes;
