import Login from "../../src/application/use-cases/LoginUseCase";
import Signup from "../../src/application/use-cases/SignupUseCase";
import UserRepositoryMemory from "../../src/infra/repositories/UserRepositoryMemory";


describe("Signup", () => {
  test("Deve fazer o signup", async () => {
    // given
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);

    const inputSignup = {
      email: "john.doe@example.com",
      password: "Password123$",
      name: "John Doe",
      age: 30,
    };
    // when
    await signup.execute(inputSignup);

    // then

    const login = new Login(userRepository);
    const inputLogin = {
      email: "john.doe@example.com",
      password: "Password123$",
    };
    const output = await login.execute(inputLogin);
    expect(output.name).toBe("John Doe");
    expect(output.token).toBe("123456");
  });
  test("Não deve fazer o signup se o nome for inválido", async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
      email: "john.doe@example.com",
      password: "Password123$",
      name: "John",
      age: 30,
    };

    await expect(() => signup.execute(inputSignup)).rejects.toThrow(
      new Error("Invalid parameter")
    );
  });
  test("Não deve fazer o signup se o e-mail for inválido", async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
      email: "john.doe@example",
      password: "Password123$",
      name: "John Doe",
      age: 30,
    };

    await expect(() => signup.execute(inputSignup)).rejects.toThrow(
      new Error("Invalid e-mail")
    );
  });
  test("Não deve fazer o signup se a senha for inválida", async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
      email: "john.doe@example.com",
      password: "Password123",
      name: "John Doe",
      age: 30,
    };

    await expect(() => signup.execute(inputSignup)).rejects.toThrow(
      new Error("Invalid password")
    );
  });
  test("Não deve fazer o signup se a idade for inválida", async () => {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
      email: "john.doe@example.com",
      password: "Password123$",
      name: "John Doe",
      age: 17,
    };

    await expect(() => signup.execute(inputSignup)).rejects.toThrow(
      new Error("Invalid parameter")
    );
  });
});
