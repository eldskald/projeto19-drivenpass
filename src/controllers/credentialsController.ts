import * as services from '../services/credentialsServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { Credential } from '../types/credentialTypes';

export async function createCredential(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  await services.createCredential({ ...req.body, userId });
  return sendResponse({ type: 'Created' }, res);
}

export async function getCredential(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  const credential: Credential = await services.getCredential(id, res.locals.user.id);
  return sendResponse({ type: 'Ok', message: credential }, res);
}

export async function getCredentials(_req: Request, res: Response) {
  const credentials: Credential[] = await services.getCredentials(res.locals.user.id);
  return sendResponse({ type: 'Ok', message: credentials }, res);
}

export async function deleteCredential(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  await services.deleteCredential(id, res.locals.user.id);
  return sendResponse({ type: 'Deleted' }, res);
}