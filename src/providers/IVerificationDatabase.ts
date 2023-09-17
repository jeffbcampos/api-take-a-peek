import { User } from "../entities/user/user";

export interface IVerificationDatabase {
    userIsValid(user: User): Promise<void>;
}