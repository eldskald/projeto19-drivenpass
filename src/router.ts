import { Router } from 'express';
import usersRouter from './routers/usersRouter';
import credentialsRouter from './routers/credentialsRouter';
import notesRouter from './routers/notesRouter';

const router = Router();
router.use(usersRouter);
router.use(credentialsRouter);
router.use(notesRouter);
export default router;