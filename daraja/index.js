import express from "express"
import dotenv from "dotenv"

dotenv.config()


const app = express()

app.listen(process.env.PORT || 5000, ()=>{
console.log("app running on port 5000");
})