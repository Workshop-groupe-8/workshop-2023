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
      });
    });
  }

  public static async findByPk(id: string): Promise<IUser | null> {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      });
    });
  }

  public static async isUserExist(
    mail: string,
    password: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE mail = '${mail}' AND password = '${password}'`,
        (err, result) => {
          if (err) {
            console.error(err);
            reject(false);
          } else {
            if (result.rows.length > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        }
      );
    });
  }

  public static async create({
    mail,
    password,
  }: {
    mail: string;
    password: string;
  }): Promise<IUser> {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (mail, password) VALUES (?, ?)",
        [mail, password],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, mail, password });
          }
        }
      );
    });
  }
}

export class Task {
  public static async findAll(): Promise<ITask[]> {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM tasks", (err, rows: ITask[]) => {
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
      db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row: ITask) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
}
