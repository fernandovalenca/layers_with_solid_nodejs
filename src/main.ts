import { Router } from "./infra/api/Router";
import { ExpressHttpServerAdapter } from "./infra/protocols/ExpressHttpServerAdapter";
import { TransactionMemoryRepository } from "./infra/repositories/TransactionMemoryRepository";

const transactionRepository = new TransactionMemoryRepository();
const httpServer = new ExpressHttpServerAdapter();
const router = new Router(httpServer, transactionRepository);
router.init();
