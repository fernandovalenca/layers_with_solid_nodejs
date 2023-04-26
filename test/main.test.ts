import axios from "axios";

describe("Teste de integração", () => {
  const code = Math.floor(Math.random() * 100);

  test("Deve criar uma transação", async () => {
    await axios({
      url: "http://localhost:3000/transactions",
      method: "POST",
      data: {
        code,
        amount: 1000,
        numberInstallments: 12,
        paymentMethod: "credit_card",
      },
    });
  });

  test("Deve buscar uma transação", async () => {
    const { data }: any = await axios({
      url: `http://localhost:3000/transactions/${code}`,
      method: "GET",
    });

    expect(data.code).toBe(code);
    expect(data.amount).toBe(1000);
    expect(data.paymentMethod).toBe("credit_card");

    expect(data.installments).toHaveLength(12);
    expect(data.installments[0].amount).toBe(83.33);
    expect(data.installments[11].amount).toBe(83.37);
  });
});
