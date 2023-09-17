import { Evaluation } from '../../entities/evaluation/evaluation';
import { IEvaluationRepository } from './../../repositories/IEvaluationRepository';
import { EvaluationDTO } from "./DTO";

export class CreateEvaluationUseCase {
    constructor(private evaluationRepository: IEvaluationRepository) {}
    async execute(data: EvaluationDTO): Promise<void> {
        const evaluation = new Evaluation(data)
        await this.evaluationRepository.save(evaluation)
    }
}
