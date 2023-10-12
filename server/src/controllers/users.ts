import { Request, Response } from "express";
import { IUser } from "../types/index";
import { User } from "../db";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt"


export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser | null = await User.findByPk(req.params.userID);
    res.status(200).json({ user });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { mail, password }:{ mail:string, password:string } = req.body;
  try {

    const isUserExist = await User.isUserExist(
      mail,
    );
    if (!isUserExist) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      //compare password
      const isPasswordCorrect = await bcrypt.compare(
        password,
        isUserExist.password
      );
      if(!isPasswordCorrect){
        res.status(401).json({ message: "Mauvais mot de passe" });
      }
       // Générez un token
       const data = { mail: req.body.mail };
       const token = jwt.sign(data, "votre_secret_key", {
         expiresIn: "1h", // Vous pouvez ajuster la durée de validité du token
       });
       res.status(200).json({ message: "login réussi", token });
      
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, "mail" | "password">;
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user: IUser = await User.create({
      mail: body.mail,
      password: hashedPassword,
    });
    res.status(201).json({ user });
  } catch (error) {
    throw new Error(error.message);
  }
};
