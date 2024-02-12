import express from 'express';
import PlayerController from '../controllers/player.controller'; // Asegúrate de ajustar la ruta al controlador

const router = express.Router();

router.post('/players', (req, res) => PlayerController.createPlayer(req, res));
router.get('/players', (req, res) => PlayerController.getAllPlayers(req, res));
router.get('/players/:id', (req, res) => PlayerController.getPlayerById(req, res));
router.put('/players/:id', (req, res) => PlayerController.updatePlayer(req, res));
router.delete('/players/:id', (req, res) => PlayerController.deletePlayer(req, res));
router.get('/players/name/:name', (req, res) => PlayerController.findPlayersByName(req, res));

export default router;