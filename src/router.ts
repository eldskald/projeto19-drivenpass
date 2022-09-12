import { Router } from 'express';
import usersRouter from './routers/usersRouter';
import credentialsRouter from './routers/credentialsRouter';
import notesRouter from './routers/notesRouter';
import cardsRouter from './routers/cardsRouter';
import wifisRouter from './routers/wifisRouter';

const router = Router();
router.use(usersRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifisRouter);
export default router;