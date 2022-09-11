import { hash, compareHash } from '../services/cryptographyServices';
import { Request, Response } from 'express';
import { User, NewUserData } from '../types/userTypes';
import { findUserByEmail, insertUser } from '../repositories/usersRepository';
import sendResponse from '../repositories/responseRepository';

export async function newUser(req: Request, res: Response) {
  const checkEmail = await findUserByEmail(req.body.email);
  if (checkEmail) throw { type: 'Unauthorized' };
  const passwordHash = await hash(req.body.password);
  const data: NewUserData = {
    email: req.body.email,
    password: passwordHash
  };
  await insertUser(data);
  return sendResponse({ type: 'Ok' }, res);
}