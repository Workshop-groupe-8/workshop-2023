import { Router } from 'express';
import { getTasks, getTask } from '../controllers/tasks';

const taskRoutes = Router();

taskRoutes.get("/api/tasks", getTasks)
taskRoutes.get("/api/tasks/:taskID", getTask)

export default taskRoutes;