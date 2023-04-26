type HttpMethod = "get" | "post" | "patch" | "put" | "delete";

export interface HttpServer {
  on(method: HttpMethod, url: string, callback: Function): void;
  listen(port: number): void;
}
