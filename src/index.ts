import express from "express";
import http from "http";
import rateLimit from "express-rate-limit";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

// @ts-ignore
import useragent from "express-useragent";

import apiRouter from "./api/router";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable("etag");
app.use(useragent.express());
app.use(
    rateLimit({
        windowMs: 16000,
        max: 24,
        message: {
            status: 0,
            message: "Biraz sakin ol champ (Ratelimit).",
        },
    })
);

app.get("/", (req: any, res: any) => {
    res.send("Psikoz (1.0.0)");
});

app.use("/api", apiRouter);

server.listen(process.env.PORT, () => {
    console.log(`Psikoz *:${process.env.PORT} portundan sunuluyor`);
});
