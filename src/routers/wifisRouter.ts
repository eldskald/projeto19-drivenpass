import { Router } from 'express';
import {
  createWifi,
  deleteWifi,
  getWifi,
  getWifis
} from '../controllers/wifisController';
import schemaValidation from '../middlewares/schemaValidation';
import tokenValidation from '../middlewares/tokenValidation';
import wifiSchema from '../schemas/wifiSchema';

const wifisRouter = Router();
wifisRouter.post(
  '/wifis',
  tokenValidation,
  schemaValidation(wifiSchema),
  createWifi
);
wifisRouter.get(
  '/wifis',
  tokenValidation,
  getWifis
);
wifisRouter.get(
  '/wifis/:id',
  tokenValidation,
  getWifi
);
wifisRouter.delete(
  '/wifis/:id',
  tokenValidation,
  deleteWifi
);
export default wifisRouter;