import express, { Router, Request, Response } from 'express';
import userRoutes from './src/routes/user'
import taskRoutes from './src/routes/task'

const app = express();

app.use("/api/users", userRoutes)
app.use('/api/tasks', taskRoutes)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
