import { IUserService } from "./IUserService";
import { IUserModel } from "../models/IUserModel";

export class UserService implements IUserService {
    private userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this.userModel = userModel; // Injected dependency
    }

    async getUsers(): Promise<string[]> {
        return this.userModel.findAll();
    }

    async getUserById(id: string): Promise<string | null> {
        return this.userModel.findById(id);
    }
}
