import { NextFunction, Request, Response } from "express";
import { TransparentErrorWithCode } from "../errors/customErrors";
import { respond } from "./respond";

export function handlePromiseMiddleware(
  middleware: (req: Request, res: Response, next: NextFunction) => Promise<any>,
  sendResultAutomatically = true
) {
  return (req: Request, res: Response, next: NextFunction) => {
    middleware(req, res, next)
      .then((result) => {
        if (result && sendResultAutomatically) res.status(200).json(result);
        next();
      })
      .catch((error) => {
        console.error(error);
        if (error instanceof TransparentErrorWithCode)
          respond(res, error.httpCode, {
            status: "Fail",
            message: error.message,
          });
        else
          respond(res, 500, {
            status: "Fail",
            message: "Unknown server error",
          });
      });
  };
}

export function getMiddlewareFromController<T>(object: T, method: keyof T) {
  return handlePromiseMiddleware(
    (
      object as Record<
        any,
        (req?: Request, res?: Response, next?: NextFunction) => Promise<any>
      >
    )[method]
  );
}
