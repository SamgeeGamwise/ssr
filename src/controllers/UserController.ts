import { Request, Response } from "express";
import { IUserService } from "../services/IUserService";

export class UserController {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }
    
    async getUsers(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getUsers();
        res.render("users", { users });
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const user = await this.userService.getUserById(req.params.id);
        res.send(user || "User not found");
    }
}
