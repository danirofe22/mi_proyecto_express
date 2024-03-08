import { Request, Response } from 'express';
import  Match  from '../models/match.model'; // Ajusta la ruta al modelo Match

class MatchController {
    // Crear un nuevo partido
    async createMatch(req: Request, res: Response) {
        try {
            const match = await Match.create(req.body);
            res.status(201).send(match);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Obtener todos los partidos
    async getAllMatches(req: Request, res: Response) {
        try {
            const matches = await Match.findAll();
            res.status(200).send(matches);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Obtener un partido por ID
    async getMatchById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const match = await Match.findByPk(id);
            if (match) {
                res.status(200).send(match);
            } else {
                res.status(404).send({ message: 'Match not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Actualizar un partido por ID
    async updateMatch(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const [updated] = await Match.update(req.body, { where: { id: id } });
            if (updated) {
                const updatedMatch = await Match.findByPk(id);
                res.status(200).send(updatedMatch);
            } else {
                res.status(404).send({ message: 'Match not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Eliminar un partido por ID
    async deleteMatch(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await Match.destroy({ where: { id: id } });
            if (deleted) {
                res.status(204).send({ message: 'Match deleted.' });
            } else {
                res.status(404).send({ message: 'Match not found.' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Buscar partidos por club ID
    async findMatchesByClubId(req: Request, res: Response) {
        try {
            const { clubId } = req.params;
            const matches = await Match.findAll({
                where: { clubId: clubId }
            });
            res.status(200).send(matches);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new MatchController();