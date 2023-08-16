import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../IUserRepository";
import { PasswordProvider } from "../../../providers/implementation/PasswordProvider";
import { User } from "../../../entities/user/user";

export class MysqlRepository implements IUserRepository {
  constructor(
    private prisma = new PrismaClient(),
    private passwordProvider = new PasswordProvider()    
  ) {}
  
  async save(user: User): Promise<void> {
    const { name, email, password } = user;          
    const userExisting = await this.prisma.users.findUnique({
      where: {
          email: email
      }
    })
    if (userExisting) {
      throw new Error("Usuário já existe");
    }

    const encryptedPassword = await this.passwordProvider.hash(password);

    await this.prisma.users.create({
      data: {
        name,
        email,
        password: encryptedPassword,
      },
    });
  }

  async findAllUsers(): Promise<User[]> {
    const prismaUsers = await this.prisma.users.findMany();

    return prismaUsers;
  }
}
