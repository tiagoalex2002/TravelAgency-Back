import { Router } from "express"
import citiesRouter from "./cities.routes"
import hotelsRouter from "./hotels.routes"
import flightRouter from "./flights.routes"

const router = Router()
router.use(citiesRouter)
router.use(hotelsRouter)
router.use(flightRouter)

export default router;