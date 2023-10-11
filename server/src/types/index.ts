export interface IUser {
  id: string;
  mail: string;
  password: string;
}

export interface ITask {
  id: number;
  name: string;
}

export interface IProgress {
  id: number;
  is_finished: boolean;
  task_id: number;
  user_id: number;
}
