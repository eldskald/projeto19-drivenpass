import * as services from '../services/wifisServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { Wifi } from '../types/wifiTypes';

export async function createWifi(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  await services.createWifi({ ...req.body, userId });
  return sendResponse({ type: 'Created' }, res);
}

export async function getWifi(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  const wifi: Wifi = await services.getWifi(id, res.locals.user.id);
  return sendResponse({ type: 'Ok', message: wifi }, res);
}

export async function getWifis(_req: Request, res: Response) {
  const wifis: Wifi[] = await services.getWifis(res.locals.user.id);
  return sendResponse({ type: 'Ok', message: wifis }, res);
}

export async function deleteWifi(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  await services.deleteWifi(id, res.locals.user.id);
  return sendResponse({ type: 'Deleted' }, res);
}