import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users'
import express from 'express'

const router = express.Router()

export default function userRoutes(app: any, getUsers, getUser, createUse, updateUser, deleteUser) {
    router.get('/users', getUsers)
    router.get('/:userID', getUser)
    router.post('/', createUse) 
    router.put('/:userID', updateUser) 
    router.delete('/:userID', deleteUser)
}
