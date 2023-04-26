import { TransactionRepository } from "../../domain/repository/TransactionRepository";

export class GetTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(code: number): Promise<Output> {
    const transaction = await this.transactionRepository.get(code);

    transaction.generateInstallments();

    return {
      code: transaction.code,
      amount: transaction.amount,
      installments: transaction.installments,
      numberInstallments: transaction.numberInstallments,
      paymentMethod: transaction.paymentMethod,
    };
  }
}

type Output = {
  code: number;
  amount: number;
  numberInstallments: number;
  paymentMethod: string;
  installments: { number: number; amount: number }[];
};
