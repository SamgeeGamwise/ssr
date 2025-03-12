import { IUserModel } from "./IUserModel";

export class UserModel implements IUserModel {
    private users: string[] = ["Alice", "Bob", "Charlie"];

    async findAll(): Promise<string[]> {
        return this.users;
    }

    async findById(id: string): Promise<string | null> {
        const user = this.users[parseInt(id)];
        return user ? user : null;
    }
}
