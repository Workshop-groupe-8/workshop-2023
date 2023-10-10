export interface IUser {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
}

export interface ITask  {
    id: number
    title: string
    description: string
    created_at: Date
    updated_at: Date
}

export interface IProgress  {
    id: number
    task_id: number
    user_id: number
    created_at: Date
    updated_at: Date
}