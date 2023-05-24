import { db } from "../Database/database.connection.js"

export async function getFlights(req,res){
    let {city} = req.params
    const min = parseInt(req.query.min)
    const max= parseInt(req.query.max)
    let expo=[]
    try{
        let flights = await db.query(`SELECT * FROM flights WHERE city = $1`, [city])
        for(let i=0; i < flights.rows.length; i++){
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


export async function getFlightDetail(req,res){
    let flight = parseInt(req.params.id)
    try{
        let inf = await db.query(`SELECT * FROM flights WHERE id=$1`, [flight])
        return res.status(201).send(inf.rows)
    } catch(err){
        console.log(err.message)
    }
}