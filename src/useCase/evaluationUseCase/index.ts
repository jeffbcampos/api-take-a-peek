import { MysqlEvaluationRepository } from './../../repositories/implementation/mySqlImplementation/MysqlEvaluationRepository';
import { CreateEvaluationController } from "./controller";
import { CreateEvaluationUseCase } from "./useCase";


const mysqlEvaluationRepository = new MysqlEvaluationRepository();
const createEvaluationUseCase = new CreateEvaluationUseCase(mysqlEvaluationRepository);
const createEvaluationController = new CreateEvaluationController(createEvaluationUseCase);

export { createEvaluationController, createEvaluationUseCase }



