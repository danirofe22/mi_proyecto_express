import { Router } from 'express';
import RoleController from '../controllers/role.controller'; // Ajusta la ruta según la ubicación de tu controlador

const router = Router();

// Rutas para el controlador de Role
router.post('/role', RoleController.createRole);
router.get('/role', RoleController.getAllRoles);
router.get('/role/:id', RoleController.getRoleById);
router.put('/role/:id', RoleController.updateRole);
router.delete('/role/:id', RoleController.deleteRole);

export default router;