import { db } from "../Database/database.connection.js"
import { getCityRepository, postCityRepository } from "../Repositories/getCityRepository.js"

export async function getCities (req, res ){
    try{
        let names=[]
        let cities = await db.query(`SELECT * FROM cities `)
        for (let i=0; i < cities.rows.length; i++){
            names.push(cities.rows[i].name)
        }
        return res.status(201).send(cities.rows)
    } catch(err){
        console.log(err.message)
    }
}

export async function postCities(req,res){
    let {name} = req.body
    try{
        await postCityRepository(name)
        return res.sendStatus(201)
    } catch(err){
        console.log(err.message)
    }
    
}