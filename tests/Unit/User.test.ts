import User from "../../src/domain/entities/User";

describe("User", () => {
  test("Deve criar um usuário", () => {
    const input = {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password: "Password$123",
      age: 18,
    };
    const user = User.create(
      input.name,
      input.email,
      input.password,
      input.age
    );

    expect(user.name).toBe(input.name);
    expect(user.email.value).toBe(input.email);
    expect(user.password.value).toBe(input.password);
    expect(user.age).toBe(input.age);
  });
});
