import * as services from '../services/documentsServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { Document } from '../types/documentTypes';

export async function createDocument(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  await services.createDocument({ ...req.body, userId });
  return sendResponse({ type: 'Created' }, res);
}

export async function getDocument(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  const document: Document = await services.getDocument(id, res.locals.user.id);
  return sendResponse({ type: 'Ok', message: document }, res);
}

export async function getDocuments(_req: Request, res: Response) {
  const documents: Document[] = await services.getDocuments(res.locals.user.id);
  return sendResponse({ type: 'Ok', message: documents }, res);
}

export async function deleteDocument(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  await services.deleteDocument(id, res.locals.user.id);
  return sendResponse({ type: 'Deleted' }, res);
}