import { getUsers, getUser, createUser, loginUser } from "../controllers/users";
import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/api/users", getUsers);
userRoutes.get("/api/user/:userID", getUser);
userRoutes.post("/", createUser);
userRoutes.post("/api/login", loginUser);

export default userRoutes;
