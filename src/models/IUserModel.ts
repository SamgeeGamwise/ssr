export interface IUserModel {
    findAll(): Promise<string[]>;
    findById(id: string): Promise<string | null>;
}
