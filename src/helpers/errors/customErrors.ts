export class TransparentErrorWithCode extends Error {
  httpCode: number;

  info?: unknown;

  public constructor(message: string, httpCode: number, info?: unknown) {
    super(message);
    this.httpCode = httpCode;
    this.info = info;
    this.name = "TransparentErrorWithCode";
  }
}

export class ClientError extends TransparentErrorWithCode {
  public constructor(message: string, httpCode?: number, info?: unknown) {
    if (httpCode !== undefined && (httpCode < 400 || httpCode > 499))
      throw new Error("Wrong ClientError constructor");
    super(message, httpCode ?? 400, info);
    this.name = "ClientError";
  }
}

export class ServerError extends TransparentErrorWithCode {
  public constructor(message: string, httpCode?: number, info?: unknown) {
    if (httpCode !== undefined && (httpCode < 500 || httpCode > 599))
      throw new Error("Wrong ServerError constructor");
    super(message, httpCode ?? 500, info);
    this.name = "ServerError";
  }
}
