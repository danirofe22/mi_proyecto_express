import { Request, Response } from 'express';
import  Club  from '../models/club.model';
import { getErrorData } from '../utils/handleError'; // Asegúrate de ajustar la ruta al modelo Club

class ClubController {
    // Constructor, si necesitas inicializar algo específico
    constructor() {}

    // Crear un nuevo club
    async createClub(req: Request, res: Response) {
        try {
            const club = await Club.create(req.body);
            res.status(201).send(club);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Obtener todos los clubes
    async getAllClubs(req: Request, res: Response) {
        try {
            const clubs = await Club.findAll();
            res.status(200).send(clubs);
        } catch (error) {
            res.json(getErrorData(error));
            res.status(500).send(error);
        }
    }

    // Actualizar un club por ID
    async updateClub(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const [ updated ] = await Club.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedClub = await Club.findOne({ where: { id: id } });
                res.status(200).send(updatedClub);
            } else {
                throw new Error('Club not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Eliminar un club por ID
    async deleteClub(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleted = await Club.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(204).send("Club deleted");
            } else {
                throw new Error('Club not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new ClubController(); // Exporta una instancia de la clase
