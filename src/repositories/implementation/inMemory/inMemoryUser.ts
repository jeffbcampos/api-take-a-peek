import { User } from "../../../entities/user/user";
import { IUserRepository } from "../../IUserRepository";

export class inMemoryUser implements IUserRepository {
    private users: User [] = []

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
    
    async findAllUsers(): Promise<User[]> {
        return this.users;
    }
}