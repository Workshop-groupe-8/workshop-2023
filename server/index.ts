import express, { Router, Request, Response } from 'express';
import userRoutes from './src/routes/user'

const app = express();


app.use("/api/users", userRoutes)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
