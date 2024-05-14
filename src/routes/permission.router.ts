import { Router } from 'express';
import {
    getAllPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission
} from '../controllers/permissions.controller';

const router = Router();

router.get('/permissions', getAllPermissions);
router.get('/permissions/:id', getPermissionById);
router.post('/permissions', createPermission);
router.put('/permissions/:id', updatePermission);
router.delete('/permissions/:id', deletePermission);

export default router;