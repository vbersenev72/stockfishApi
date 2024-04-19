// @ts-ignore
import validateFen from 'fen-validator'
import z from "zod";


export const getBestMoveFromFenZodSchema = z.object({
  position: z.string().refine((value) => validateFen(value), 'Is not FEN position. Check the correctness of the notation'),
});

export type IgetBestMoveFromFenZodSchema = z.infer<
  typeof getBestMoveFromFenZodSchema
>;
