
import { User } from "../models/userModel.js"
// import bcryptjs from "bcryptjs"
import Jwt  from "jsonwebtoken"


export const login = async (req, res) => {

    try {
        const {email, password} = req.body
    
        if(!email || !password){
            return res.status(401).json({
                message: "please enter the details",
                success: false,
            })
        }
    
        const user = await User.findOne({email})
    
        if(!user){
            return res.status(401).json({
                message: "invalid  email",
                success: false,
            })
        }
    
        // const passwordMatch = await bcryptjs.compare(password, user.password)

    
        if (password !== user.password) {
            return res.status(401).json({
                message: "Invalid password",
                success: false,
            });
        }
        else{
            const token = Jwt.sign({}, "qweioddddfodqpnsdnavxy", { expiresIn: "30d" });

    
            return res.status(200).cookie("token" , token, {httpOnly: true}).json({
                token: token,
                message: "login successfully",
                success: true,
                user: user,
            })
        }
    } catch (error) {
        console.log(error)
    }

}