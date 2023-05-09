import { CreateTransactionUseCase } from "../../src/application/use-cases/CreateTransactionUseCase";
import { GetTransactionUseCase } from "../../src/application/use-cases/GetTransactionUseCase";
import { TransactionMemoryRepository } from "../../src/infra/repositories/TransactionMemoryRepository";

describe("GetTransactionUseCase", () => {
  test("Deve carregar os dados de uma transaction", async () => {
    const code = Math.floor(Math.random() * 100);
    const input = {
      code,
      amount: 1000,
      numberInstallments: 12,
      paymentMethod: "credit_card",
    };
    const transactionRepository = new TransactionMemoryRepository();
    const createTransactionUseCase = new CreateTransactionUseCase(
      transactionRepository
    );
    const getTransactionUseCase = new GetTransactionUseCase(
      transactionRepository
    );

    createTransactionUseCase.execute(input);
    const transaction = await getTransactionUseCase.execute(code);

    expect(transaction.code).toBe(code);
    expect(transaction.amount).toBe(1000);
    expect(transaction.paymentMethod).toBe("credit_card");

    expect(transaction.installments).toHaveLength(12);
    expect(transaction.installments[0].amount).toBe(83.33);
    expect(transaction.installments[11].amount).toBe(83.37);
  });
});
