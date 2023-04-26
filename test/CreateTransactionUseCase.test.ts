import { CreateTransactionUseCase } from "../src/application/use-cases/CreateTransactionUseCase";
import { TransactionMemoryRepository } from "../src/infra/repository/TransactionMemoryRepository";

describe("CreateTransactionUseCase", () => {
  test("Deve criar um transaction", async () => {
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

    await createTransactionUseCase.execute(input);
  });
});
