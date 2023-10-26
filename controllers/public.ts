// Dada Ki Jay Ho

import Redis from "ioredis";

import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  // CODE TO CHECK IF USER WITH ENTERED EMAIL EXISTS OR NOT
  // CODE TO VALIDATE THE PASSWORD OF USER

  req.session.email = email; // SAVE THE EMAIL OF USER IN SESSION (REDIS DATABASE)

  return res.send("Login Successfull");
};

export const logout = async (req: Request, res: Response) => {
  req.session.destroy((error) => {
    if (error) return res.send(error);
    res.send("Logged Out Successfully!");
  });
};

export const signup = (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;

  // CODE TO STORE USER DATA IN SOME DATABASE

  res.send("Registration done successfully!");
};
