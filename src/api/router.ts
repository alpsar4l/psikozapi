import { Router, Response, Request } from "express";
const router = Router();

import Posts from "./components/Posts/Posts";
import Client from "./components/Client/Client";

router.get("/posts", (req: Request, res: Response) => {
    new Posts().listAll(req, res);
});

router.get("/client/login", (req: Request, res: Response) => {
    new Client().login(req, res);
});

export default router;
