import express from 'express'
import dotenv from 'dotenv'
import authrouter from './routes/auth.routers.js'
import router from './routes/test.routes.js'
import { authenticate } from './middleware/authmiddleware.js'
import todo_router from './routes/todo.router.js'
import cors from "cors"

dotenv.config()
const app=express()

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json()) 

app.use('/auth',authrouter)
app.use('/todos',authenticate,todo_router)
app.use("/db",authenticate,router)


const PORT=process.env.PORT ||8000
app.get("/",(req,res)=>{
    res.send("welcome to the todoLIst")
})
app.listen(PORT,()=>{
    console.log(`your app is listening at http://localhost:${PORT} `)
})