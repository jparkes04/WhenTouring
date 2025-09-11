import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config({ path: import.meta.dirname + '../../.env.local' });

const uri = process.env.MONGO_DB_CONNECTION_STRING!;

const client = new MongoClient(uri);

async function run() {
    const database = client.db('when_touring');
    const setlistPages = await database.createCollection("eventLists");
    await setlistPages.createIndex({ artistName: 1 });
    await setlistPages.createIndex({ timestamp: 1 }, { expireAfterSeconds: 259200 } ); // 3 days

    await client.close();
}

run().catch(console.dir);