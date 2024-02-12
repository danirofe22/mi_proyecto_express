import { Request, Response } from 'express';
import  Participation  from '../models/participation.model';
import { sequelize } from '../config/database';
import { getErrorData } from '../utils/handleError';

class ParticipationController {
  // Agregar una nueva participación
  async createParticipation(req:Request, res:Response) {
    try {
      const participation = await Participation.create(req.body);
      res.status(201).json(participation);
    } catch (error) {
      const errorResponse = getErrorData(error);
      res.status(400).json({ message: 'Error al crear la participación', errorResponse });
    }
  }

  // Actualizar los goles de una participación
  async updateGoals(req:Request, res:Response) {
    try {
      const { id } = req.params;
      const { goals } = req.body;
      const updated = await Participation.update({ goals }, { where: { id } });

      if (updated[0] > 0) {
        res.status(200).json({ message: 'Participación actualizada correctamente' });
      } else {
        res.status(404).json({ message: 'Participación no encontrada' });
      }
    } catch (error) {
      const errorResponse = getErrorData(error);
      res.status(500).json({ message: 'Error al actualizar la participación', errorResponse });
    }
  }

  // Listar todas las participaciones
  async listParticipations(req:Request, res:Response) {
    try {
      const participations = await Participation.findAll();
      res.status(200).json(participations);
    } catch (error) {
      const errorResponse = getErrorData(error);
      res.status(500).json({ message: 'Error al listar las participaciones', errorResponse });
    }
  }

  // Obtener los goles totales de un jugador
  async getTotalGoalsByPlayer(req:Request, res:Response) {
    try {
      const { playerId } = req.params;
      const participations = await Participation.findAll({
        where: { playerId },
        attributes: ['playerId', [sequelize.fn('SUM', sequelize.col('goals')), 'totalGoals']],
        group: ['playerId']
      });

      if (participations.length > 0) {
        res.status(200).json(participations[0]);
      } else {
        res.status(404).json({ message: 'Jugador no encontrado o sin goles' });
      }
    } catch (error) {
      const errorResponse = getErrorData(error);
      res.status(500).json({ message: 'Error al obtener los goles totales del jugador', errorResponse });
    }
  }
}

export default new ParticipationController();

