import { db } from "../Database/database.connection.js"

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