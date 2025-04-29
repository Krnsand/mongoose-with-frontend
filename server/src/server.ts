import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares";
import { catsRouter } from "./services/cats/cats-router";
import { visitsRouter } from "./services/visits/visits-router";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 7777;
const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/cats-db";

app.use(express.json());
app.use(catsRouter);
app.use(visitsRouter);
app.use(errorHandler);

async function main() {
  await mongoose.connect(dbUrl);
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
}

main().catch(console.error);
