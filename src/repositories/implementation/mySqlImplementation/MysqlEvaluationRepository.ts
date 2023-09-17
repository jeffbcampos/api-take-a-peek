import { PrismaClient } from '@prisma/client';
import { IEvaluationRepository } from './../../IEvaluationRepository';
import { Evaluation } from '../../../entities/evaluation/evaluation';

export class MysqlEvaluationRepository implements IEvaluationRepository {
    constructor(private prisma = new PrismaClient()) {}

    async save(evaluation: Evaluation): Promise<void> {
        
        const { dataRegistro, email, nomeEmpresa, ramoAtividade, outroRamo, modeloContratacao, modeloTrabalho, cargo, stacksEmpresa, stacksOutros, avaliacaoGeral, ambienteTrabalho, apoioAssistenciaRh, diversidade, planoCarreira, remuneracao, treinamento, beneficios, outrosBeneficios, salario, comentarios } = evaluation

        let stacksEmpresaString: string = "";
        if (Array.isArray(stacksEmpresa)) {
            stacksEmpresaString = stacksEmpresa.join(",");
        }

        let beneficiosString: string = "";
        if (Array.isArray(beneficios)) {
            beneficiosString = beneficios.join(",");
        }
        
        const existingEvaluation = await this.prisma.companyEvaluation.findUnique({
            where: {
                email,
                nomeEmpresa
            }
        })

        if (existingEvaluation) {
            throw new Error("Avaliação já existe")
        }

        await this.prisma.companyEvaluation.create({
            data: {
                dataRegistro,
                email,
                nomeEmpresa,
                ramoAtividade,
                outroRamo,
                modeloContratacao,
                modeloTrabalho,
                cargo,
                stacksEmpresa: stacksEmpresaString,
                stacksOutros,
                avaliacaoGeral,
                ambienteTrabalho,
                apoioAssistenciaRh,
                diversidade,
                planoCarreira,
                remuneracao,
                treinamento,
                beneficios: beneficiosString,
                outrosBeneficios,
                salario,
                comentarios
            }
        }); 
        
    }       
    
}