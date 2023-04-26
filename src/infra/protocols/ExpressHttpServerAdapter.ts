import { HttpServer } from "./HttpServer";
import express, { Application, Request, Response } from "express";

export class ExpressHttpServerAdapter implements HttpServer {
  app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(
    method: "get" | "post" | "patch" | "put" | "delete",
    url: string,
    callback: Function
  ): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body);

      res.json(output);
    });
  }
  listen(port: number): void {
    this.app.listen(port, () => console.log(`listening on ${port}`));
  }
}
