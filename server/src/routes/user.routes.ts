import { Router } from "express";
import { insertUser, deleteUser, getUsers, getUser } from '../controller/userController'
const router = Router();

router.get("/users", getUsers);

router.get("/user/:mail", getUser);

router.post("/user", insertUser);

router.delete("/user/:id", deleteUser);

export default router;