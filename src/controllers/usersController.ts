import { hash, compareHash } from '../services/cryptographyServices';
import { Request, Response } from 'express';
import { User, NewUserData } from '../types/userTypes';
import { insertUser, findUserByEmail } from '../repositories/usersRepository';
import { isAlreadyRegistered, generateToken } from '../services/usersServices';
import sendResponse from '../repositories/responseRepository';

export async function signUp(req: Request, res: Response) {
  await isAlreadyRegistered(req.body.email);
  const passwordHash = await hash(req.body.password);
  const data: NewUserData = {
    email: req.body.email,
    password: passwordHash
  };
  await insertUser(data);
  return sendResponse({ type: 'Created' }, res);
}

export async function signIn(req: Request, res: Response) {
  const user: User | null = await findUserByEmail(req.body.email);
  if (!user) throw { type: 'Unauthorized' };
  const passwordCheck = await compareHash(req.body.password, user.password);
  if (!passwordCheck) throw { type: 'Unauthorized' };
  const token: string = generateToken(user.id);
  return sendResponse({ type: 'Ok', message: { token }}, res);
}