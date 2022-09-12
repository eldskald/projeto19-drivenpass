import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNote,
  getNotes
} from '../controllers/notesController';
import schemaValidation from '../middlewares/schemaValidation';
import tokenValidation from '../middlewares/tokenValidation';
import noteSchema from '../schemas/noteSchema';

const notesRouter = Router();
notesRouter.post(
  '/notes',
  tokenValidation,
  schemaValidation(noteSchema),
  createNote
);
notesRouter.get(
  '/notes',
  tokenValidation,
  getNotes
);
notesRouter.get(
  '/notes/:id',
  tokenValidation,
  getNote
);
notesRouter.delete(
  '/notes/:id',
  tokenValidation,
  deleteNote
);
export default notesRouter;