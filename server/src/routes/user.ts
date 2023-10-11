import { getUsers, getUser, createUser,loginUser } from '../controllers/users'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/users', getUsers)
userRoutes.get('/:userID', getUser)
userRoutes.post('/', createUser) 
userRoutes.post('/login', loginUser)

export default userRoutes 