import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_DB_CONNECTION_STRING!;
let client: MongoClient | null = null;

export async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client;
}

export async function getDb() {
  const client = await getClient();
  return client.db('when_touring');
}
