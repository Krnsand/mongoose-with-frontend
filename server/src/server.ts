import express from "express";
import mongoose from "mongoose";
import { CatModel } from "./services/cats/cats-model";

const app = express();
const port = process.env.PORT ?? 7777;

app.use(express.json());

app.get("/api/cats", async (req, res) => {
  const cats = await CatModel.find({});
  res.status(200).json(cats);
});

app.post("/api/cats", async (req, res) => {
  const cat = await CatModel.create(req.body);
  res.status(201).json(cat);
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/cats-db");
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
}

main().catch(console.error);
