import { expect, test, it } from "vitest";
import { User } from "./user";

test("criar usuário", () => {
  it("Deve ser possível criar um usuário"),
    async () => {
      const user = new User({
        name: "Fulano",
        email: "fulanosilva@gmail.com",
        password: "123",
      });
      expect(user).toBeInstanceOf(User);

      expect(user.name).toBe("Fulano");
      expect(user.email).toBe("fulanosilva@gmail.com");
    };
});
