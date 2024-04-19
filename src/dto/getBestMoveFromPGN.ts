import z from "zod";

const ReqularExpression = new RegExp(
  "s*(d{1,3}).?s*((?:(?:O-O(?:-O)?)|(?:[KQNBR][1-8a-h]?x?[a-h]x?[1-8])|(?:[a-h]x?[a-h]?[1-8]=?[QRNB]?))+?)(?:s*d+.?d+?m?s)?.?s*((?:(?:O-O(?:-O)?)|(?:[KQNBR][1-8a-h]?x?[a-h]x?[1-8])|(?:[a-h]x?[a-h]?[1-8]=?[QRNB]?))+?)?(?:s*d+.?d+?m?s)?"
);

export const getBestMoveFromPgnZodSchema = z.object({
  position: z
    .string()
    .refine((value) => ReqularExpression.test(value), "Is not PGN position. Check the correctness of the notation"),
});

export type IgetBestMoveFromPgnZodSchema = z.infer<
  typeof getBestMoveFromPgnZodSchema
>;
