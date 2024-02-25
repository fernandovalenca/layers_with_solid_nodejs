import { Transaction } from '../../src/domain/entities/Transaction';

describe('Transaction', () => {
  test('Deve criar uma transaction com os parâmetros corretos', () => {
    const input = {
      code: 1,
      amount: 1000,
      paymentMethod: 'credit_card',
      numberInstallments: 3,
    };
    const transaction = new Transaction(
      input.code,
      input.amount,
      input.numberInstallments,
      input.paymentMethod
    );

    expect(transaction.code).toEqual(input.code);
    expect(transaction.amount).toEqual(input.amount);
    expect(transaction.paymentMethod).toEqual(input.paymentMethod);
    expect(transaction.numberInstallments).toEqual(input.numberInstallments);

    transaction.generateInstallments();
    const total = transaction.installments.reduce(
      (acc, installment) => acc + installment.amount,
      0
    );

    expect(transaction.installments.length).toBe(3);
    expect(transaction.installments[0].amount).toBe(333.33);
    expect(transaction.installments[2].amount).toBe(333.34);
    expect(total).toBe(input.amount);
  });
});
