import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares";
import { catsRouter } from "./services/cats/cats-router";

const app = express();
const port = process.env.PORT ?? 7777;

app.use(express.json());
app.use(catsRouter);
app.use(errorHandler);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/cats-db");
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
}

main().catch(console.error);
