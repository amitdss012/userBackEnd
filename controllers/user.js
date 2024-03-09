import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs"

export const Register = async (req, res) => {
    try {
        const {fullName , email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "invaild data",
                success: false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: "email already used",
                success: false,
            })
        }

        // const hashedPasswrod = await bcryptjs.hash(password, 20)

        const newUser = await User.create({
            fullName,
            email,
            password, // hashedPassword if using bcryptjs
        });


        return res.status(201).json({
            message: "account created succesfully",
            success: true,
            user: newUser,
        })

    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

