import { db } from "../Database/database.connection.js"
import { getCityRepository, getCityByName } from "../Repositories/getCityRepository.js"

export async function getFlights(req,res){
    let cityId = parseInt(req.params.cityId)
    try{
        let city=  await db.query('SELECT * FROM cities WHERE id=$1', [cityId]);
        console.log(city)
        let flights = await db.query(`SELECT * FROM flights WHERE destiny= $1`, [city.rows[0].name])
        return res.status(201).send(flights.rows) 
    } catch(err){
        console.log(err.message)
    }
}


export async function getFlightDetail(req,res){
    let flight = parseInt(req.params.id)
    try{
        let inf = await db.query(`SELECT * FROM flights WHERE id=$1`, [flight])
        let city= db.query(`SELECT cities.id FROM cities WHERE name=$1`,[inf.rows[0].destiny])
        inf.rows.push(city)
        return res.status(201).send(inf.rows)
    } catch(err){
        console.log(err.message)
    }
}