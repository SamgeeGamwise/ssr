import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserModel } from "../models/UserModel";

const router = Router();

// Instantiate dependencies
const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

router.get("/", userController.getUsers.bind(userController));
router.get("/:id", userController.getUserById.bind(userController));

export default router;
