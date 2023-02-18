import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from './Routes/user.js'
import authRoute from './Routes/auth.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
dotenv.config()

// middlewares 
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
      credentials: true,
    })
  );

// db connection 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connected successfully");
}).catch(err => console.error(err))


// routes 

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)



app.listen(process.env.PORT || 5005, () => {
    console.log("app runnig on port 5001");
})