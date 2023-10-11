import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './src/routes/user'
import taskRoutes from './src/routes/task'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
    }
);
app.use("/", userRoutes)
app.use('/',taskRoutes);

app.listen(3000, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
