import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userShema = new Schema({
    email: { type: String, required: true, unique:true },
    username: { type: String, required: true, unique:true },
    profile: { type: String},
    password: { type: String, required: true }
})

 const userModel = mongoose.model("user", userShema);
export default  userModel ;