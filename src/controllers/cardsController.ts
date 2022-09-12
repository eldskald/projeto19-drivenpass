import * as services from '../services/cardsServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { Card } from '../types/cardTypes';

export async function createCard(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  await services.createCard({ ...req.body, userId });
  return sendResponse({ type: 'Created' }, res);
}

export async function getCard(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  const card: Card = await services.getCard(id, res.locals.user.id);
  return sendResponse({ type: 'Ok', message: card }, res);
}

export async function getCards(_req: Request, res: Response) {
  const cards: Card[] = await services.getCards(res.locals.user.id);
  return sendResponse({ type: 'Ok', message: cards }, res);
}

export async function deleteCard(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  await services.deleteCard(id, res.locals.user.id);
  return sendResponse({ type: 'Deleted' }, res);
}