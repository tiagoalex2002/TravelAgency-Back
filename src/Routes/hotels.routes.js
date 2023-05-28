import { Router } from "express";
import { getHotels,getHotelDetail } from "../Controllers/hotels.controllers.js";

const hotelsRouter= Router()

hotelsRouter.get("/hotels/:cityId",getHotels)
hotelsRouter.get("/hotel/:id", getHotelDetail)

export default hotelsRouter;