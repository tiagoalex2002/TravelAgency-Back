import { Router } from "express"
import citiesRouter from "./cities.routes.js"
import hotelsRouter from "./hotels.routes.js"
import flightRouter from "./flights.routes.js"

const router = Router()
router.use(citiesRouter)
router.use(hotelsRouter)
router.use(flightRouter)

export default router;