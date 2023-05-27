import { db } from "../Database/database.connection.js"

export async function getFlights(req,res){
    let cityId = parseInt(req.params.cityId)
    const min = parseInt(req.query.min)
    const max= parseInt(req.query.max)
    let expo=[]
    try{
        let city= await db.query (`SELECT * FROM cities WHERE id=$1 `,[cityId])
        let flights = await db.query(`SELECT * FROM flights WHERE origin= $1`, [city.rows[0].name])
        for(let i=0; i < flights.rows.length; i++){
            let item=flights.rows[i].price 
            if( item>= min && item <= max){
                expo.push(item)
            }
        }
        return res.status(201).send(flights)
    } catch(err){
        console.log(err.message)
    }
}


export async function getFlightDetail(req,res){
    let flight = parseInt(req.params.id)
    try{
        let inf = await db.query(`SELECT * FROM flights WHERE id=$1`, [flight])
        return res.status(201).send(inf.rows)
    } catch(err){
        console.log(err.message)
    }
}