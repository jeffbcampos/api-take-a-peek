import { User } from "../../../entities/user/user";
import { IVerificationDatabase } from "../../IVerificationDatabase";

export class VerificationDatabase implements IVerificationDatabase {
    constructor() {}
    async userIsValid(user: User):Promise<void> {
        
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\W]{8,}$/;


        
        if (!user.name || !user.email || !user.password) {
            throw new Error("Dados incompletos");
        }        
        if (user.name.length > 100 || user.email.length > 100) {
            throw new Error("Nome ou Email não pode ter mais de 100 caracteres");
        }                 
        if (!emailRegex.test(user.email)) {
            throw new Error("Email inválido")
        }
        if (!strongPasswordRegex.test(user.password)) {
            throw new Error("Senha Fraca");
        }           
                        
    }
}