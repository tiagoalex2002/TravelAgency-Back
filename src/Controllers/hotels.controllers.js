import { db } from "../Database/database.connection.js"

export async function getHotels (req, res){
    let cityId= parseInt(req.params.cityId)
    try{
        let city= await db.query (`SELECT * FROM cities WHERE id=$1 `,[cityId])
        console.log(city)
        let hotels= await db.query(`SELECT * FROM hotels WHERE city= $1`,[city.rows[0].name])
        console.log(hotels.rows)
        return res.status(201).send(hotels.rows)
    } catch(err){
        console.log(err.message)
    }
}
export async function getHotelDetail(req,res){
    let hotel = parseInt(req.params.id)
    let info=[]
    try{
        let characteristics = await db.query(`SELECT hotels.characteristics FROM hotels WHERE id=$1`,[hotel])
        let commodities = await db.query(`SELECT hotels.commodities FROM hotels WHERE id= $1`,[hotel])
        info.push(characteristics)
        info.push(commodities)
        return res.status(201).send(info)
    } catch(err){
        console.log(err.message)
    }
}