import { Response, Request } from "express";
import moment from "moment";

moment.locale("tr");

class Client {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (email === "metehansaral@glynet.com" && password === "123") {
            // code = 1: giriş bilgileri doğru
            res.send({ status: true, code: 1 });
        } else {
            // code = 2: giriş bilgileri yanlış
            res.send({ status: false, code: 2 });
        }
    }
}

export default Client;
