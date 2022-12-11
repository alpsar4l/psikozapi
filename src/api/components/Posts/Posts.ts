import { Response, Request } from "express";
import moment from "moment";

moment.locale("tr");

class Posts {
    async listAll(req: Request, res: Response) {
        res.send([
            { id: 1, text: "Merhaba" },
            { id: 2, text: "Hello" },
            { id: 3, text: "Hola" },
            { id: 4, text: "Salam" }
        ])
    }
}

export default Posts;
