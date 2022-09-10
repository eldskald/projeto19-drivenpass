import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import router from './router';
import errorHandler from './middlewares/errorHandler';
import { config } from 'dotenv';
config();

const PORT: number = Number(process.env.PORT) || 4000;

const server = express();
server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandler);

server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}...`);
});
