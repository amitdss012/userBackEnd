import expres from 'express'
import { Register } from '../controllers/user.js'
import {login} from "../controllers/Login.js"
import { logOut } from '../controllers/logOut.js';

const userRouter = expres.Router()

userRouter.route("/register").post(Register);

userRouter.route("/login").post(login)

userRouter.route("/logout").get(logOut)

export default userRouter