import { Request, Response } from "express";
import { CreateUserUseCase } from "./usecase";
import { PasswordProvider } from "../../providers/implementation/PasswordProvider";


export class CreateUserController {
  constructor(
    private useCase: CreateUserUseCase,
    private passwordProvider: PasswordProvider
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {      
      const passwordHash = await this.passwordProvider.hash(password);
      await this.useCase.execute({
        name,
        email,
        password: passwordHash,
      });

      return response.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error: any) {
      console.error(error);
      if (error.message === "Usuário já existe") {
        return response.status(400).json({ msg: "Usuário já existe" });
      } else {
        return response
        .status(500)
        .json({ msg: "Ocorreu um erro ao criar o usuário" });
      }
      
    }
  }
}
