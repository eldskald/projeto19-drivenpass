import db from '../database';
import { Note, NewNoteData } from '../types/noteTypes';

export async function findNoteById(id: number): Promise<Note | null> {
  return await db.notes.findUnique({
    where: { id }
  });
}

export async function findAllUserNotes(id: number): Promise<Note[]> {
  return await db.notes.findMany({
    where: { userId: id }
  });
}

export async function insertNote(data: NewNoteData): Promise<void> {
  await db.notes.create({
    data: {
      userId: data.userId,
      title: data.title,
      note: data.note
    }
  });
}

export async function removeNote(id: number): Promise<void> {
  await db.notes.delete({
    where: { id }
  });
}