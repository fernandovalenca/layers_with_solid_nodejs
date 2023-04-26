import { Transaction } from "../../domain/entities/Transaction";
import { TransactionRepository } from "../../domain/repository/TransactionRepository";

export class TransactionMemoryRepository implements TransactionRepository {
  transactions: Transaction[] = [];
  installments: any[] = [];
  constructor() {}

  async save(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction);

    for (const installment of transaction.installments) {
      this.installments.push({ code: transaction.code, ...installment });
    }
  }

  async get(code: number): Promise<Transaction> {
    const transactionData = this.transactions.find(
      (transactionItem) => transactionItem.code === code
    );

    if (!transactionData) {
      throw new Error("Transaction not found");
    }

    const transaction = new Transaction(
      transactionData.code,
      transactionData.amount,
      transactionData.numberInstallments,
      transactionData.paymentMethod
    );

    return transaction;
  }
}
