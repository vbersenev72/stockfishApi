import { getBestMoveFromFenZodSchema } from "../../../dto/getBestMoveFromFEN";
import { getBestMoveFromPgnZodSchema } from "../../../dto/getBestMoveFromPGN";
import { validate } from "./dtoMiddleware";

export const validatePgnPosition = validate(getBestMoveFromPgnZodSchema)
export const validateFenPosition = validate(getBestMoveFromFenZodSchema)