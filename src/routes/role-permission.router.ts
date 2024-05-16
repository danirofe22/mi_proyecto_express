import { Router } from 'express';
import RolePermissionController from '../controllers/role-permission.controller';

const router = Router();

router.post('/role-permissions', RolePermissionController.create);
router.get('/role-permissions', RolePermissionController.getAll);
router.get('/role-permissions/:id', RolePermissionController.getById);
router.put('/role-permissions/:id', RolePermissionController.update);
router.delete('/role-permissions/:id', RolePermissionController.delete);

export default router;