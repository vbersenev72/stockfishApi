import { Request, Response } from "express";
import { defaultUnexpectedError } from "../helpers/decorators/defaultUnexpectedErrorMessage.decorator";
import { ServerError } from "../helpers/errors/customErrors";

class StockfishController {
  @defaultUnexpectedError("Can not get best move in PGN-position")
  async getBestMoveFromPGN(req: Request) {
    const bestMove = "";

    return {
      status: "ok",
      message: "Getting the best move was successful!",
      bestMove,
    };
  }

  @defaultUnexpectedError("Can not get best move in FEN-position")
  async getBestMoveFromFEN(req: Request) {
    const bestMove = "";

    return {
      status: "ok",
      message: "Getting the best move was successful!",
      bestMove,
    };
  }
}

export const stockfishControllerInstanse = new StockfishController();
