import { Request, Response } from "express"
import { IUser } from "../types/index"
import { User } from '../db/user'

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByPk(req.params.userID)
        res.status(200).json({ user })
    } catch (error) {
        throw error
    }

}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.findAll()
        res.status(200).json({ users })
    } catch (error) {
        throw error
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IUser, "name" | "email" | "password">
        const user: IUser = await User.create({
            name: body.name,
            email: body.email,
            password: body.password
        })
        res.status(201).json({ user })
    } catch (error) {
        throw error
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByPk(req.params.userID)
        if (user) {
            await user.update(req.body)
            res.status(200).json({ user })
        } else {
            res.status(404).json('User not found')
        }
    } catch (error) {
        throw error
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByPk(req.params.userID)
        if (user) {
            await user.destroy()
            res.status(200).json('User deleted')
        } else {
            res.status(404).json('User not found')
        }
    } catch (error) {
        throw error
    }
}