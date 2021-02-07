import { Router } from "express";
import controllers, {getSpecies} from "../controllers/plant.controllers";

var router = Router();

/* GET items listing. */
router
  .route("/plants")
  .get(controllers.getMany)

router
  .route("/plants/:plantId")
  .get(controllers.getOne);

router
  .route("/species")
  .get(getSpecies);


export default router;
