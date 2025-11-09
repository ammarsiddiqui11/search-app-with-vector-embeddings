// db.js
require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI
const dbName = process.env.DB_NAME;

let client;
let db;

async function connectToMongo() {
    if (db) return db;

    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB connected");
    return db;
}

async function getDB() {
    if (!db) {
        await connectToMongo();
    }
    return db;
}

async function getCollection(collectionName) {
    const database = await getDB();
    return database.collection(collectionName);
}

async function closeConn() {
    if(client){
        await client.close();
    }
}
module.exports = {
    connectToMongo,
    getDB,
    getCollection,
    closeConn
};