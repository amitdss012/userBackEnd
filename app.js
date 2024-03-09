import express from "express";
import dotenv from "dotenv"
import DataBaseConnection from "./DB/dataBase.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import cors from "cors"

DataBaseConnection() 

const PORT = process.env.PORT || 8000

const app = express();


app.get("/" , (req, res) => {
    res.send("hellow amit");
})

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

const corsOptions = {
    origin: "http://localhost:5173/",
    credentials: true,
}

app.use(cors(corsOptions))

app.use("/api/v1/user", userRouter);




app.listen(PORT ,() => {
    console.log(`server Running at ${PORT}`)
})