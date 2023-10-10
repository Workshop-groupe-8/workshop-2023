import { ITask, IUser } from "../types";
import { db } from "./config";

export class User {
    public static async findAll(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM users", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    public static async findByPk(id: number): Promise<IUser | null> {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    public static async create({ mail, password }: { mail: string, password: string }): Promise<IUser> {
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO users (mail, password) VALUES (?, ?)", [mail, password], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, mail, password });
                }
            });
        });
    }
}

export class Task {
    public static async findAll(): Promise<ITask[]> {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM tasks", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    public static async findByPk(id: number): Promise<ITask | null> {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
}
