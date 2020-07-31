import { Router } from "express";

import InhabitantController from "./controllers/InhabitantController";

const routes = Router();

routes.get("/inhabitant/:id", InhabitantController.index);

export default routes;
