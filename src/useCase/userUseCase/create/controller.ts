import { Request, Response } from "express";
import { CreateUserUseCase } from "./usecase";
import { VerificationDatabase } from "../../../providers/implementation/verifications/verificationDatabase";

export class CreateUserController {
  constructor(
    private useCase: CreateUserUseCase,    
    private verificationUser: VerificationDatabase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;                
    try {
      const user = {name, email, password}
      const verificationUser = await this.verificationUser.userIsValid(user);    

      await this.useCase.execute({
        name,
        email,
        password
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
