import { Router } from 'express';
import {
  createCard,
  deleteCard,
  getCard,
  getCards
} from '../controllers/cardsController';
import schemaValidation from '../middlewares/schemaValidation';
import tokenValidation from '../middlewares/tokenValidation';
import cardSchema from '../schemas/cardSchema';

const cardsRouter = Router();
cardsRouter.post(
  '/cards',
  tokenValidation,
  schemaValidation(cardSchema),
  createCard
);
cardsRouter.get(
  '/cards',
  tokenValidation,
  getCards
);
cardsRouter.get(
  '/cards/:id',
  tokenValidation,
  getCard
);
cardsRouter.delete(
  '/cards/:id',
  tokenValidation,
  deleteCard
);
export default cardsRouter;