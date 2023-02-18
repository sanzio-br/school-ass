import bcrypt from "bcrypt"
import User from "../modes/userModel.js"
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
    const { email, password, username, profile } = req.body;

    try {
        // hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            email,
            username,
            profile,
            password: hash
        })

        await newUser.save()
        return res.status(200).json({newUser,msg:"user registered successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const login = async  (req,res)=>{
    const { email, username} = req.body;
    const user = await User.findOne({"username":username})
    if(!user) return res.status(404).json("User do not exist")
    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = jwt.sign({ id: user.id }, "jwtkey");
      const { password, ...others } = user;
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure:true
        })
        .status(200)
        .json(others);
}
export const logout= async (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
}
