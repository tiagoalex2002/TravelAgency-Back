import { db } from "../Database/database.connection.js"

export async function getHotels (req, res){
    let {city}= req.params
    const min = parseInt(req.query.min)
    const max= parseInt(req.query.max)
    let expo=[]
    try{
        let hotels= await db.query(`SELECT * FROM hotels WHERE city= $1`,[city])
        for(let i=0; i < hotels.rows.length; i++){
            let item=flights.rows[i].price 
            if( item>= min && item <= max){
                expo.push(item)
            }
        }
        return res.status(201).send(expo)
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