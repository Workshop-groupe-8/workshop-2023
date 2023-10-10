import { Request, Response } from "express"
import { ITask, IUser } from "../types/index"
import { Task, User } from '../db'

export const getTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const task: ITask | null = await Task.findByPk(req.params.userID)
        res.status(200).json({ task })
    } catch (error:any) {
        throw new Error(error.message)
    }

}

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        //const tasks: ITask[] = await Task.findAll()
        res.status(200).json( "tasks" )
    } catch (error:any) {
        throw new Error(error.message)
    }
}