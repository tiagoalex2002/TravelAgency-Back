import { db } from "../Database/database.connection.js"
import { getCityRepository , getCityByName} from "../Repositories/getCityRepository.js"

export async function getHotels (req, res){
    let cityId= parseInt(req.params.cityId)
    try{
        let city=  await db.query('SELECT * FROM cities WHERE id=$1', [cityId]);
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

    try{
        let info = await db.query(`SELECT * FROM hotels WHERE id=$1`,[hotel])
        let city= await db.query(`SELECT cities.id FROM cities WHERE name=$1`,[info.rows[0].city])
        info.rows.push(city)
        return res.status(201).send(info.rows)
    } catch(err){
        console.log(err.message)
    }
}