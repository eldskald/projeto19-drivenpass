import { Router } from 'express';
import usersRouter from './routers/usersRouter';

const router = Router();
router.use(usersRouter);
export default router;