import { 
  findNoteById,
  findAllUserNotes,
  insertNote,
  removeNote
} from '../repositories/notesRepository';
import { encrypt, decrypt } from '../repositories/cryptographyRepository';
import { Note, NewNoteData } from '../types/noteTypes';

export async function createNote(data: NewNoteData): Promise<void> {
  try {
    const encryptedNote: string = encrypt(data.note);
    await insertNote({...data, note: encryptedNote});
  } catch (err: any) {
    const meta: { target: string[] } | undefined = err.meta;
    if (!meta) {
      throw err;
    }
    if (meta.target[0] === 'userId' && meta.target[1] === 'title') {
      throw { type: 'Conflict', message: 'Label already in use' };
    }
  }
}

export async function getNote(noteId: number, userId: number): Promise<Note> {
  const note: Note | null = await findNoteById(noteId);
  if (!note || note.userId != userId) throw { type: 'Not Found' };
  const decryptedNote = decrypt(note.note);
  return { ...note, note: decryptedNote };
}

export async function getNotes(userId: number): Promise<Note[]> {
  const notes: Note[] = await findAllUserNotes(userId);
  for (let i = 0; i < notes.length; i++) {
    const decryptedNote: string = decrypt(notes[i].note);
    notes[i] = { ...notes[i], note: decryptedNote };
  }
  return notes;
}

export async function deleteNote(noteId: number, userId: number): Promise<void> {
  const note: Note | null = await findNoteById(noteId);
  if (!note || note.userId != userId) throw { type: 'Not Found' };
  await removeNote(noteId);
}