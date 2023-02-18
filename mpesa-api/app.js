import { Express } from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config()

app.post((req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


app.listen(process.env.PORT || 5000, () => {
    console.log("App is running on port 5000");
})