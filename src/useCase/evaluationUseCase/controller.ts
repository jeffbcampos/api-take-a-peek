import { Request, Response } from "express";
import { CreateEvaluationUseCase } from "./useCase";

export class CreateEvaluationController {
    constructor(private useCase: CreateEvaluationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { dataRegistro, email, nomeEmpresa, ramoAtividade, outroRamo, modeloContratacao, modeloTrabalho, cargo, stacksEmpresa, stacksOutros, avaliacaoGeral, ambienteTrabalho, apoioAssistenciaRh, diversidade, planoCarreira, remuneracao, treinamento, beneficios, outrosBeneficios, salario, comentarios } = request.body
        try {
            await this.useCase.execute({
                dataRegistro,
                email,
                nomeEmpresa,
                ramoAtividade,
                outroRamo,
                modeloContratacao,
                modeloTrabalho,
                cargo,
                stacksEmpresa,
                stacksOutros,
                avaliacaoGeral,
                ambienteTrabalho,
                apoioAssistenciaRh,
                diversidade,
                planoCarreira,
                remuneracao,
                treinamento,
                beneficios,
                outrosBeneficios,
                salario,
                comentarios
            })
            return response.status(201).json({ msg: "Avaliação criada com sucesso!" })    
        } 
        
        catch (error: any) {
            if (error.message === "Avaliação já existe") {
                return response.status(409).json({ msg: "Avaliação já existe" });
            } else {                
                return response
                .status(400)
                .json({ msg: `${error.message}` });
              }
        }        

    }
}