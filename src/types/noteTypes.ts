import { notes } from '@prisma/client';

export type Note = notes;

export interface NewNoteData {
  userId: number;
  title: string;
  note: string;
};