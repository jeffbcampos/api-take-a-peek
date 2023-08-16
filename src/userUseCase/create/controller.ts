import { Request, Response } from "express";
import { CreateUserUseCase } from "./usecase";
import { PasswordProvider } from "../../providers/implementation/PasswordProvider";
import { verificationDatabase } from "../../providers/implementation/verifications/verificationDatabase";


export class CreateUserController {
  constructor(
    private useCase: CreateUserUseCase,
    private passwordProvider: PasswordProvider,
    private verificationUser = new verificationDatabase() 
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;                
    try {
      const verificationUser = await this.verificationUser.userIsValid(name, email, password);            
      const passwordHash = await this.passwordProvider.hash(password);
      await this.useCase.execute({
        name,
        email,
        password: passwordHash,
      });

      return response.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error: any) {  

      if (error.message === "Usuário já existe") {
        return response.status(409).json({ msg: "Usuário já existe" });
      } else {
        return response
        .status(400)
        .json({ msg: `${error.message}` });
      }
      
    }
  }
}
