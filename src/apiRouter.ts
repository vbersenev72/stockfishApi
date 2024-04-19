import { Router } from "express";
import { stockfishRouter } from "./routers";

const apiRouter = Router();

apiRouter.use('/bestmove', stockfishRouter);

export { apiRouter };
