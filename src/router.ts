import { Router } from 'express';
import usersRouter from './routers/usersRouter';
import credentialsRouter from './routers/credentialsRouter';

const router = Router();
router.use(usersRouter);
router.use(credentialsRouter);
export default router;