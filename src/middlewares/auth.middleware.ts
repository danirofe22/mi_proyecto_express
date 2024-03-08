import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface UserPayload extends JwtPayload {
  userId: string; // Asegúrate de que este campo coincida con los datos que almacenas en el token.
}

// Extiende Request de Express para incluir la propiedad user
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

class AuthMiddleware {
  public authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1] || authHeader;

    if (!token) {
      res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
      return 
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
      req.user = decoded;
      next();
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        res.status(403).json({ message: 'El token ha expirado.' });
      } else if (err instanceof jwt.JsonWebTokenError) {
        res.status(403).json({ message: 'Token no válido.' });
      } else {
        res.status(500).json({ message: 'Error al procesar el token.' });
      }
    }
  }
}

export default new AuthMiddleware();
