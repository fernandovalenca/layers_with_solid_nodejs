import { Transaction } from "../../domain/entities/Transaction";
import { TransactionRepository } from "../../domain/repository/TransactionRepository";

export class CreateTransactionUseCase {
  constructor(readonly transactionRepository: TransactionRepository) {}

  async execute(input: Input): Promise<void> {
    const transaction = new Transaction(
      input.code,
      input.amount,
      input.numberInstallments,
      input.paymentMethod
    );

    transaction.generateInstallments();
    this.transactionRepository.save(transaction);
  }
}

type Input = {
  code: number;
  numberInstallments: number;
  amount: number;
  paymentMethod: string;
};
