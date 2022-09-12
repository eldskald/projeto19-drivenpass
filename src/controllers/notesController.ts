import * as services from '../services/notesServices';
import sendResponse from '../repositories/responseRepository';
import { Request, Response } from 'express';
import { Note } from '../types/noteTypes';

export async function createNote(req: Request, res: Response) {
  const userId: number = res.locals.user.id;
  await services.createNote({ ...req.body, userId });
  return sendResponse({ type: 'Created' }, res);
}

export async function getNote(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  const note: Note = await services.getNote(id, res.locals.user.id);
  return sendResponse({ type: 'Ok', message: note }, res);
}

export async function getNotes(_req: Request, res: Response) {
  const notes: Note[] = await services.getNotes(res.locals.user.id);
  return sendResponse({ type: 'Ok', message: notes }, res);
}

export async function deleteNote(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) throw { type: 'Unprocessable' };
  await services.deleteNote(id, res.locals.user.id);
  return sendResponse({ type: 'Deleted' }, res);
}