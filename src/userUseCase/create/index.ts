import { PasswordProvider } from "../../providers/implementation/PasswordProvider";
import { inMemoryUser } from "../../repositories/implementation/inMemory/inMemoryUser";
import { MysqlRepository } from "../../repositories/implementation/mySqlImplementation/MysqlRepository";
import { CreateUserController } from "./controller";
import { CreateUserUseCase } from "./usecase";


const mySqlRepository = new MysqlRepository()
const inMemoryRepository = new inMemoryUser()
const passwordProvider =  new PasswordProvider()
const createUserUseCase = new CreateUserUseCase(mySqlRepository)
const createUserController = new CreateUserController(createUserUseCase, passwordProvider)

export { createUserController, createUserUseCase}