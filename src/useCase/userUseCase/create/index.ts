import { VerificationDatabase } from './../../../providers/implementation/verifications/verificationDatabase';
import { inMemoryUser } from "../../../repositories/implementation/inMemory/inMemoryUser";
import { MysqlRepository } from "../../../repositories/implementation/mySqlImplementation/MysqlRepository";
import { CreateUserController } from "./controller";
import { CreateUserUseCase } from "./usecase";


const mySqlRepository = new MysqlRepository()
const inMemoryRepository = new inMemoryUser()
const createUserUseCase = new CreateUserUseCase(mySqlRepository)
const verificationDatabase = new VerificationDatabase()
const createUserController = new CreateUserController(createUserUseCase, verificationDatabase)

export { createUserController, createUserUseCase}