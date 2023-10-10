import express, { Router, Request, Response } from 'express';
import userRoutes from './src/routes/user'
import taskRoutes from './src/routes/task'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes)
app.use('/api/tasks', taskRoutes)

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});
