export class verificationDatabase {
    constructor() {}
    async userIsValid(name: any, email: any, password: any):Promise<void> {
        
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        
        if (!name || !email || !password) {
            throw new Error("Dados incompletos");
        }        
        if (name.length > 100 || email.length > 100) {
            throw new Error("Nome ou Email não pode ter mais de 100 caracteres");
        }                 
        if (!emailRegex.test(email)) {
            throw new Error("Email inválido")
        }
        if (!strongPasswordRegex.test(password)) {
            throw new Error("Senha Fraca");
        }           
                        
    }
}