import { CreateTransactionUseCase } from "../../application/use-cases/CreateTransactionUseCase";
import { GetTransactionUseCase } from "../../application/use-cases/GetTransactionUseCase";
import { HttpServer } from "../protocols/HttpServer";
import { TransactionRepository } from "../../application/repositories/TransactionRepository";

export class Router {
  constructor(
    private readonly httpServer: HttpServer,
    private readonly transactionRepository: TransactionRepository
  ) {}

  async init() {
    this.httpServer.on("post", "/transactions", async (_: any, body: any) => {
      const { code, amount, numberInstallments, paymentMethod } = body;
      const createTransactionUseCase = new CreateTransactionUseCase(
        this.transactionRepository
      );

      createTransactionUseCase.execute({
        code,
        amount,
        numberInstallments,
        paymentMethod,
      });
    });

    this.httpServer.on(
      "get",
      "/transactions/:code",
      async (params: any, _: any) => {
        const { code } = params;
        const getTransactionUseCase = new GetTransactionUseCase(
          this.transactionRepository
        );

        const transaction = await getTransactionUseCase.execute(Number(code));

        return transaction;
      }
    );

    this.httpServer.listen(3000);
  }
}
