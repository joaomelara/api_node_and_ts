import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
    res.send("opa");
});

router.post("/cidades", CidadesController.create);

export {router};