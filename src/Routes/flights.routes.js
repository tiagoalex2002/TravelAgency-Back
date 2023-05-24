import { Router } from "express";
import { getFlights, getFlightDetail} from "../Controllers/flights.controllers.js";

const flightRouter= Router()

flightRouter.get("/flights/:city", getFlights)
flightRouter.get("/flights/:id", getFlightDetail)

export default flightRouter;