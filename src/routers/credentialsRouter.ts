import { Router } from 'express';
import {
  createCredential,
  deleteCredential,
  getCredential,
  getCredentials
} from '../controllers/credentialsController';
import schemaValidation from '../middlewares/schemaValidation';
import tokenValidation from '../middlewares/tokenValidation';
import credentialSchema from '../schemas/credentialSchema';

const credentialsRouter = Router();
credentialsRouter.post(
  '/credentials',
  tokenValidation,
  schemaValidation(credentialSchema),
  createCredential
);
credentialsRouter.get(
  '/credentials',
  tokenValidation,
  getCredentials
);
credentialsRouter.get(
  '/credentials/:id',
  tokenValidation,
  getCredential
);
credentialsRouter.delete(
  '/credentials/:id',
  tokenValidation,
  deleteCredential
)
export default credentialsRouter;