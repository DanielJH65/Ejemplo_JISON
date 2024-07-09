import { Request, Response } from "express";
import { InterpreterModel } from "../models/interpreter";

export class InterpreterController {
  static async interpret(req: Request, res: Response) {
    const { input } = req.body;
    const result = await InterpreterModel.start({ input });
    res.json(result);
  }
}
