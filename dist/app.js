"use strict";
// Dada Ki Jay Ho
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const public_1 = __importDefault(require("./routes/public"));
const home_1 = __importDefault(require("./routes/home"));
const app = (0, express_1.default)();
// 1. create redis client (so that session store can use it to store data inside the redis server)
const ioredis_1 = __importDefault(require("ioredis"));
const is_auth_1 = __importDefault(require("./middlewares/is-auth"));
const redisClient = new ioredis_1.default(6379, "redis-db", { password: "root" });
// 2. create session store
const redisSessionStore = new connect_redis_1.default({
    client: redisClient,
    prefix: "my-NodeJs-app-redis-store:",
    ttl: undefined,
});
app.use((0, express_session_1.default)({
    name: "node-js-app-session-name",
    secret: process.env.SESSION_SECRET,
    store: redisSessionStore,
    resave: false,
    saveUninitialized: false,
}));
app.use(express_1.default.json());
app.use(public_1.default);
app.use(is_auth_1.default);
app.use("/home", home_1.default);
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
