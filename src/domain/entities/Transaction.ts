import { Installment } from "./Installment";

export class Transaction {
  installments: Installment[] = [];

  constructor(
    readonly code: number,
    readonly amount: number,
    readonly numberInstallments: number,
    readonly paymentMethod: string
  ) {}

  generateInstallments() {
    let amount =
      Math.round((this.amount / this.numberInstallments) * 100) / 100;
    let diff =
      Math.round((this.amount - amount * this.numberInstallments) * 100) / 100;

    for (let number = 1; number <= this.numberInstallments; number++) {
      if (number === this.numberInstallments) {
        amount += diff;
      }

      this.installments.push(new Installment(number, amount));
    }
  }
}
