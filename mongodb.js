const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
    const uri = process.env.MONGODB_URI

    const client = new MongoClient(uri)
    try {
        await client.connect();
        await listDatabases(client)
    } catch (err) {
        console.error(err)
    } finally {
        await client.close();
    }
}

main().catch(console.error)

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(`${db.name}`))
}


module.exports = main