import { ITask, IUser } from "../types";
import { db } from "./config";

export class User {
    public static async findAll(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.rows);
                }
            }
            );
        });
    }

    public static async findByPk(id: string): Promise<IUser | null> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE id =${id}`, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public static async create({ mail, password }: { mail: string, password: string }): Promise<Pick <IUser, "mail" | "password">> {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users (mail, password) VALUES (?, ?)", [mail, password],  (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ mail, password });
                }
            });
        });
    }
}

export class Task {
    public static async findAll(): Promise<ITask[]> {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.rows);
                }
            });
        });
    }

    public static async findByPk(id: number): Promise<ITask | null> {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks WHERE id = ?", [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.row);
                }
            });
        });
    }
}
 