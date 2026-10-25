import express from 'express'
import userRoll from './userdata.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config({ path: './config.env' })

app.get('/', (req, res)=>{
  res.send("Welcome to KiiTGPT");
})

// const PORT = 3000

app.get('/users', (req, res)=>{
  res.send(userRoll)
})

app.listen(process.env.PORT,()=>{
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
})
