import { Request, Response, Router } from "express";
import { CatModel } from "./cats-model";

const getAllCats = async (req: Request, res: Response) => {
  const cats = await CatModel.find({});
  res.status(200).json(cats);
};

const createCat = async (req: Request, res: Response) => {
  const cat = await CatModel.create(req.body);
  res.status(201).json(cat);
};

export const catsRouter = Router()
  .get("/api/cats", getAllCats)
  .post("/api/cats", createCat);
