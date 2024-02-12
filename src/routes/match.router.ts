import { Router } from 'express';
import matchController from '../controllers/match.controller';

const router = Router();

router.post('/matches', matchController.createMatch.bind(matchController));
router.get('/matches', matchController.getAllMatches.bind(matchController));
router.get('/matches/:id', matchController.getMatchById.bind(matchController));
router.put('/matches/:id', matchController.updateMatch.bind(matchController));
router.delete('/matches/:id', matchController.deleteMatch.bind(matchController));
router.get('/matches/club/:clubId', matchController.findMatchesByClubId.bind(matchController));

export default router;
