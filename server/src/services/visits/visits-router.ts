import { Request, Response, Router } from "express";
import { VisitModel } from "./visits-model";

const getAllVisits = async (req: Request, res: Response) => {
  const visits = await VisitModel.find({});
  res.status(200).json(visits);
};

const createVisit = async (req: Request, res: Response) => {
  const visit = await VisitModel.create(req.body);
  res.status(201).json(visit);
};

export const visitsRouter = Router()
  .get("/api/visits", getAllVisits)
  .post("/api/visits", createVisit);
