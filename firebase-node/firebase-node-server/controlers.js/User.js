import User from "../modes/userModel.js"
export const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const deleteUsers = async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await User.findByIdAndDelete(id)
        res.status(200).json({ msg: `${id} deleted successfully`, deleted })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findOne(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)

    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const newUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: false })
    } catch (error) {
        res.status(500).json(error.message)
    }
}