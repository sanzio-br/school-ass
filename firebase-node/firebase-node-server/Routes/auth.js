import express  from "express";
import jwt from "jsonwebtoken";

import { login, logout, Register } from "../controlers.js/auth.js";

const router = express.Router();

router.post('/register', Register)
router.post('/login', login)
router.post('/logout', logout)

export default router;