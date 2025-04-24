import express from "express";

const app = express();
const port = process.env.PORT ?? 7777;

app.use(express.json());

app.get("/api/cats", (req, res) => {
  res.status(200).json("Cats...");
});

app.post("/api/cats", (req, res) => {
  res.status(201).json("Created...");
});

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
