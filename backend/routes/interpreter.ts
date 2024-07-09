import { Router } from "express";
import { InterpreterController } from "../controllers/interpreter";

export const interpreterRouter = Router();

interpreterRouter.post("/", InterpreterController.interpret);
