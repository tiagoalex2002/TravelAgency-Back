import { db } from "../Database/database.connection.js"

export async function getCityRepository (id) {
	return db.query('SELECT * FROM cities WHERE id=$1', [id]);
}

export async function getCityByName (name){
    return db.query(`SELECT cities.id FROM cities WHERE name=$1`,[name])
}