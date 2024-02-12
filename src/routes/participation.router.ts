import { Router } from 'express';
import participationController from '../controllers/participation.controller';

const router = Router();
router.post('/participations', participationController.createParticipation.bind(participationController));
router.put('/participations/:id', participationController.updateGoals.bind(participationController));
router.get('/participations', participationController.listParticipations.bind(participationController));
router.get('/participations/goals/:playerId', participationController.getTotalGoalsByPlayer.bind(participationController));

export default router;