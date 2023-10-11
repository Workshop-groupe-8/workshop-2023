import { getUsers, getUser, createUser,loginUser } from '../controllers/users'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/api/users', getUsers)
userRoutes.get('/api/:userID', getUser)
userRoutes.post('/api/user', createUser) 
userRoutes.post('/api/login', loginUser)

export default userRoutes 