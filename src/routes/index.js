import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {
  createUser,
  getUsers,
  getUser,
  loginValidation,
  createTask,
  deleteTask,
  setTaskProgress
} from '../controllers/userController'
import { verifyToken } from '../middleware/verifyToken'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const privateRoute = express.Router()

// Rota privada com o middleware de verificação de token
privateRoute.use(verifyToken)

app.post('/authenticate', (req, res) => {
  // console.log(req.body)
  loginValidation(req.body.login, req.body.password, res)
})

app.post('/user', (req, res) => {
  createUser(req.body.login, req.body.password, res)
})

privateRoute.get('/user', (req, res) => {
  // console.log(req.userId)
  getUser(req, res)
})

privateRoute.get('/users', (req, res) => {
  // console.log(req.userId)
  getUsers(req, res)
})

privateRoute.post('/task', (req, res) => {
  createTask(req.userId, req.body.name, res)
})

privateRoute.delete('/task/:id', (req, res) => {
  deleteTask(req.userId, req.params.id, res)
})

privateRoute.put('/task/:id', (req, res) => {
  setTaskProgress(
    req.userId,
    req.params.id,
    req.body.inProgress,
    req.body.toDo,
    req.body.done,
    res
  )
})

app.use(privateRoute)

export default app
