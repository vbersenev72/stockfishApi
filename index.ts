import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { apiRouter } from "./src/apiRouter";

config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`STARTED ON 127.0.0.1:${PORT}`));
