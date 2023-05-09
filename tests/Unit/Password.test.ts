import Password from "../../src/domain/entities/Password";

describe("Password", () => {
  test("Deve criar um password válido", () => {
    const input = "Password$123";
    const password = new Password(input);

    expect(password.value).toBe(input);
  });
  test("Não deve criar um password válido", () => {
    expect(() => new Password("Password123")).toThrow(new Error("Invalid password"));
  });
});
