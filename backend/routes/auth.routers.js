import {Router} from 'express'
// import { signup } from '../controllers/auth_controllers'
// import { signin, signup } from '../controllers/auth_controllers.js'
import { signup } from '../controllers/auth_controllers/signup.js'
import { signin } from '../controllers/auth_controllers/signin.js'
const authrouter=Router()

authrouter.post('/signup',signup)

authrouter.post('/signin',signin)

authrouter.post('/signout',(req,res)=>
    {
    res.status(200).json({
        title:'hi this is a sign-out router'
    })
})

export default authrouter