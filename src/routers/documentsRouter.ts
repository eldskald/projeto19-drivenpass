import { Router } from 'express';
import {
  createDocument,
  deleteDocument,
  getDocument,
  getDocuments
} from '../controllers/documentsController';
import schemaValidation from '../middlewares/schemaValidation';
import tokenValidation from '../middlewares/tokenValidation';
import documentSchema from '../schemas/documentSchema';

const documentsRouter = Router();
documentsRouter.post(
  '/documents',
  tokenValidation,
  schemaValidation(documentSchema),
  createDocument
);
documentsRouter.get(
  '/documents',
  tokenValidation,
  getDocuments
);
documentsRouter.get(
  '/documents/:id',
  tokenValidation,
  getDocument
);
documentsRouter.delete(
  '/documents/:id',
  tokenValidation,
  deleteDocument
);
export default documentsRouter;