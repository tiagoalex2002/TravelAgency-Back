import { Router } from "express";
import { getFlights, getFlightDetail} from "../Controllers/flights.controllers.js";

const flightRouter= Router()

flightRouter.get("/flights/:cityId", getFlights)
flightRouter.get("/flight/:id", getFlightDetail)

export default flightRouter;