import { Router } from 'express';
import {
  createCredential,
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
  '/credentials/:id',
  tokenValidation,
  getCredential
);
credentialsRouter.get(
  '/credentials',
  tokenValidation,
  getCredentials
);
export default credentialsRouter;