import { Request, Response } from "express";

export class RootController {
    home(req: Request, res: Response): void {
        res.render("home");
    }
}
