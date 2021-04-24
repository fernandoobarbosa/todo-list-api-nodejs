import User from '../models/user'
import hash from 'object-hash'
import jwt from 'jsonwebtoken'

export const getAll = async () => {
  const users = await User.find()
  return users
}

export const get = async (userId) => {
  const user = await User.find({ login: userId })
  return user
}

export const authenticate = async (login, password) => {
  const hashPassword = hash(password)
  const user = await User.findOne({
    login: login,
    password: hashPassword
  }).exec()
  if (user) {
    const id = login // id do usuário
    const token = jwt.sign({ id }, 'keyTest', {
      // verificação do token
      expiresIn: 7200 // tempo do token em segundos (2 horas)
    })
    return { auth: true, token: token }
  }
  throw new Error('You have entered an invalid username or password')
}

export const create = async (login, password) => {
  const hashPassword = hash(password)
  const user = await User.insertMany([
    { login: login, password: hashPassword }
  ])
  return user
}

export const createNewTask = async (userId, taskName) => {
  // console.log(userId)
  const user = await User.updateOne(
    { login: userId },
    {
      $push: {
        tasks: {
          $each: [
            { name: taskName, toDo: true, inProgress: false, done: false }
          ]
        }
      }
    }
  )

  return user
}

export const deleteTaskById = async (userId, taskId) => {
  const user = await User.update(
    { login: userId },
    { $pull: { tasks: { _id: taskId } } },
    { multi: true }
  )

  return user
}

export const updateTaskProgress = async (
  userId,
  taskId,
  inProgress,
  toDo,
  done
) => {
  const user = await User.updateOne(
    { login: userId, 'tasks._id': taskId },
    {
      $set: {
        'tasks.$.inProgress': inProgress || false,
        'tasks.$.toDo': toDo || false,
        'tasks.$.done': done || false
      }
    }
  )
  return user
}
