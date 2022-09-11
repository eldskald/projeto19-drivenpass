import { Router } from 'express';
import { newUser } from '../controllers/usersController';
import schemaValidation from '../middlewares/schemaValidation';
import newUserSchema from '../schemas/newUserSchema';

const usersRouter = Router();
usersRouter.post('/sign-up', schemaValidation(newUserSchema), newUser);
export default usersRouter;