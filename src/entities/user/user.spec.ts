import { expect, test, it, beforeEach, describe } from "vitest";
import { User } from "./user";
import { inMemoryUser } from "../../repositories/implementation/inMemory/inMemoryUser";

describe("criar usuário", () => {
    let repository: inMemoryUser;

    beforeEach(() => {
      repository = new inMemoryUser();
    });

    it('Deve ser possível criar um usuário', async () => {
      const user = new User({name:'Luiz',email:'a@a.com', password:'123'})
      await repository.save(user)

      const result = await repository.findAllUsers()
      expect(result.length).toBe(1)
      console.log(result)
      expect(result[0].name).toEqual('Luiz')
    })
  ;
});
