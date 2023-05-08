import Email from "../../src/domain/entities/Email";

describe("Email", () => {
  test("Deve criar um e-mail válido", () => {
    const input = "example@example.com";
    const email = new Email(input);

    expect(email.value).toBe(input);
  });

  test("Não deve criar um e-mail válido", () => {
    const input = "example.example.com";
    
    expect(() => new Email(input)).toThrow(new Error("Invalid e-mail"));
  });
});
