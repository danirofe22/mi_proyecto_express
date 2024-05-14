import userRoutes from './user.router';
import clubRoutes from './club.router';
import playerRoutes from './player.router';
import matchRoutes from './match.router';
import participationRoutes from './participation.router';
import permissionsRoutes from './permission.router';
import { Router } from 'express';

const apiRouter = Router();


apiRouter.use('/api', userRoutes);
apiRouter.use('/api', clubRoutes);
apiRouter.use('/api', playerRoutes);
apiRouter.use('/api', matchRoutes);
apiRouter.use('/api', participationRoutes);
apiRouter.use('/api', permissionsRoutes);

export default apiRouter;