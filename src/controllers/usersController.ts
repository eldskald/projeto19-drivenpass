import { createUser, generateToken, validateLogin } from '../services/usersServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { User, NewUserData } from '../types/userTypes';

export async function signUp(req: Request, res: Response) {
  await createUser(req.body as NewUserData);
  return sendResponse({ type: 'Created' }, res);
}

export async function signIn(req: Request, res: Response) {
  const user: User = await validateLogin(req.body.email, req.body.password);
  const token: string = generateToken(user.id);
  return sendResponse({ type: 'Ok', message: { token }}, res);
}