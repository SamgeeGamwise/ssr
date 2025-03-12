export interface IUserService {
    getUsers(): Promise<string[]>;
    getUserById(id: string): Promise<string | null>;
}
