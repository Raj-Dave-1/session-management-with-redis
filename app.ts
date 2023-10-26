// Dada Ki Jay Ho

import express, { Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import expressSession from "express-session";
import RedisStore from "connect-redis";

import publicRoutes from "./routes/public";
import homeRoutes from "./routes/home";

declare module "express-session" {
  export interface SessionData {
    email: string;
  }
}

const app = express();

// 1. create redis client (so that session store can use it to store data inside the redis server)
import Redis from "ioredis";
import isAuth from "./middlewares/is-auth";
const redisClient = new Redis(6379, "redis-db", { password: "root" });

// 2. create session store
const redisSessionStore = new RedisStore({
  client: redisClient,
  prefix: "my-NodeJs-app-redis-store:",
  ttl: undefined,
});

app.use(
  expressSession({
    name: "node-js-app-session-name",
    secret: process.env.SESSION_SECRET!,
    store: redisSessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(publicRoutes);
app.use(isAuth);
app.use("/home", homeRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
