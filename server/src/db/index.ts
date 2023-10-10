import { ITask, IUser } from "../types";

export class User {
    constructor() {
    }
    public static async findAll(): Promise<IUser[]> {
        let a
        return a as IUser[];
    }
    public static async findByPk(id: number): Promise<IUser | null> {
        let a
        return a as IUser;
    }
    public static async create({mail, password}:{mail:string,password:string}): Promise<IUser> {
        let a
        return a as IUser;
    }
}

export class Task {
    public static async findAll(): Promise<ITask[]> {
        let a
        return a as ITask[];
    }
    public static async findByPk(id: number): Promise<ITask | null> {
        let a
        return a as ITask;
    }
}