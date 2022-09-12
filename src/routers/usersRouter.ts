import { Router } from 'express';
import { signUp, signIn } from '../controllers/usersController';
import schemaValidation from '../middlewares/schemaValidation';
import signUpSchema from '../schemas/signUpSchema';
import signInSchema from '../schemas/signInSchema';

const usersRouter = Router();
usersRouter.post('/sign-up', schemaValidation(signUpSchema), signUp);
usersRouter.post('/sign-in', schemaValidation(signInSchema), signIn);
export default usersRouter;