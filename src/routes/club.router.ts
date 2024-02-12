import { Router } from 'express';
import clubController from '../controllers/club.controller';

const router = Router();


router.post('/clubs', clubController.createClub.bind(clubController)); 
router.get('/clubs', clubController.getAllClubs.bind(clubController));
router.put('/clubs/:id', clubController.updateClub.bind(clubController));
router.delete('/clubs/:id', clubController.deleteClub.bind(clubController));

export default router;