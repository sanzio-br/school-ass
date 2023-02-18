import express  from "express";
import {  deleteUsers, getUser, getUsers, updateUser } from "../controlers.js/User.js";

const router = express.Router();

// router.post('/', addUser);
router.get('/', getUsers)
router.delete('/:id', deleteUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)

export default router;