import { Request, Response } from 'express';
import Player from '../models/player.model'; // Ajusta la ruta al modelo Player
import { Op } from 'sequelize';

class PlayerController {
    // Crear un nuevo jugador
    async createPlayer(req: Request, res: Response) {
        try {
            const player = await Player.create(req.body);
            res.status(201).send(player);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Obtener todos los jugadores
    async getAllPlayers(req: Request, res: Response) {
        try {
            const players = await Player.findAll();
            res.status(200).send(players);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Obtener un jugador por ID
    async getPlayerById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const player = await Player.findByPk(id);
            if (player) {
                res.status(200).send(player);
            } else {
                res.status(404).send({ message: 'Player not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Actualizar un jugador por ID
    async updatePlayer(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const [updated] = await Player.update(req.body, { where: { id: id } });
            if (updated) {
                const updatedPlayer = await Player.findByPk(id);
                res.status(200).send(updatedPlayer);
            } else {
                res.status(404).send({ message: 'Player not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Eliminar un jugador por ID
    async deletePlayer(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await Player.destroy({ where: { id: id } });
            if (deleted) {
                res.status(204).send({ message: 'Player deleted.' });
            } else {
                res.status(404).send({ message: 'Player not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Buscar jugadores por nombre
    async findPlayersByName(req: Request, res: Response) {
        try {
            const { name } = req.params;
            const players = await Player.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            res.status(200).send(players);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new PlayerController();