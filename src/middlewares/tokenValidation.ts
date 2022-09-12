import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../services/usersServices';

async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.headers.authorization?.replace('Bearer ', '');
  if (!token) throw { type: 'Unauthorized' };
  res.locals.user = await validateToken(token);
  next();
}

export default tokenValidation;