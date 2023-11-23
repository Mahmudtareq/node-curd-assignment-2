import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { UserRoutes } from './app/modules/users/users.routes';

// parsers
app.use(express.json());
app.use(cors());

// router
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
