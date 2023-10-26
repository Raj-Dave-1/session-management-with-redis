// Dada Ki Jay Ho

import { Request, Response } from "express";

export const welcome = (req: Request, res: Response) => {
  // GET USER DATA FROM req.session.email

  res.send("Welcome " + req.session.email);
};
