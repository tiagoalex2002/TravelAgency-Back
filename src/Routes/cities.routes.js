import { Router } from "express";
import { getCities} from "../Controllers/cities.controllers.js";
import validateSchema from "../Middleware/validateSchema.js";
import { authValidation } from "../Middleware/authValidation.js";

const citiesRouter= Router()

citiesRouter.get("/cities", getCities)

export default citiesRouter;
