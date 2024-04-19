import { Response } from 'express';

export function respond(
  res: Response,
  code: number,
  responseBody: { status: string; message: string },
) {
  res.status(code).json(responseBody);
}

