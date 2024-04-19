import { Router } from "express";
import { stockfishControllerInstanse } from "../controllers";
import { getMiddlewareFromController } from "../helpers/middlewares/promiseMiddlewareHandler";
import { validateFenPosition, validatePgnPosition } from "../helpers/middlewares/dto/validator";

const stockfishRouter = Router();

function getMiddleware(method: keyof typeof stockfishControllerInstanse) {
  return getMiddlewareFromController(stockfishControllerInstanse, method);
}

stockfishRouter.post("/pgn", validatePgnPosition, getMiddleware("getBestMoveFromPGN"));
stockfishRouter.post("/fen", validateFenPosition, getMiddleware("getBestMoveFromFEN"));

export { stockfishRouter };
