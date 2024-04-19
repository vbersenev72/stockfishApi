import { Request, Response } from "express";
import { defaultUnexpectedError } from "../helpers/decorators/defaultUnexpectedErrorMessage.decorator";
import { ServerError } from "../helpers/errors/customErrors";
import { getBestMoveFromFEN } from "../helpers/tools/getBestMoveFromFEN";
//@ts-ignore
import stockfish from "stockfish";
import { getBestMoveFromPGN } from "../helpers/tools/getBestMoveFromPGN";

class StockfishController {
  @defaultUnexpectedError("Can not get best move in PGN-position")
  async getBestMoveFromPGN(req: Request) {
    const bestMove = ''

    return {
      status: "ok",
      message: "Getting the best move was successful!",
      bestMove,
    };
  }

  @defaultUnexpectedError("Can not get best move in FEN-position")
  async getBestMoveFromFEN(req: Request) {
    const bestMove = await getBestMoveFromFEN(req.body.position);

    return {
      status: "ok",
      message: "Getting the best move was successful!",
      bestMove,
    };
  }
}

export const stockfishControllerInstanse = new StockfishController();
