// Dada Ki Jay Ho

import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  // check if email exists in req.session or not
  if (!req.session.email) res.send("Please Login First");

  next();
};
