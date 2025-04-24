import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT ?? 7777;

app.use(express.json());

app.get("/api/cats", (req, res) => {
  res.status(200).json("Cats...");
});

app.post("/api/cats", (req, res) => {
  res.status(201).json("Created...");
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/cats-db");
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
}

main().catch(console.error);
