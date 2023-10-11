import { Request, Response } from "express"
import { IUser } from "../types/index"
import { User } from '../db'

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByPk(req.params.userID)
        res.status(200).json({ user })
    } catch (error) {
        throw new Error(error.message)
    }

}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IUser, "mail" | "password">
        const user: IUser | null = await User.findByPk(req.params.userID)
        if (user && user.mail === body.mail && user.password === body.password) {
            res.status(200).json({ user })
        } else {
            res.status(401).json({message: "Unauthorized"})
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.findAll()
        res.status(200).json({ users })
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IUser, "mail" | "password">
        const user: IUser = await User.create({
            mail: body.mail,
            password: body.password
        })
        res.status(201).json({ user })
    } catch (error) {
        throw new Error(error.message)
    }
}