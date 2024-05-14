import { Request, Response } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

class AuthController {
    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'User and password are required' });
        }

        try {
            const userDetails = await User.findOne({ where: { username } });
            
            if (!userDetails) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            
            if (userDetails.pass !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const payload = { userId: userDetails.id, user: userDetails.user };
            const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '24h' });

            res.status(200).json({
                message: 'Authentication successful',
                token,
                user: userDetails
            });
        } catch (error: any) {
            res.status(500).json({ 
                message: 'Internal server error',
                error: error.toString() // Mejor práctica para evitar enviar objetos de error completos al cliente.
            });
        }
    }
}

export default new AuthController();
