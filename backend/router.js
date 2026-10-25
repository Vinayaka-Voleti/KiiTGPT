import express from 'express'
import { signin, login } from './function.js' 

const router = express.Router()

router.use('/signin', signin)

router.get('/login', login)

export default router



