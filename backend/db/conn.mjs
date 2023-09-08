import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";


const client = new MongoClient(connectionString);


let conn;
if (!connectionString.startsWith("mongodb://") && !connectionString.startsWith("mongodb+srv://")) {
    console.error("Invalid connection string format");
} else {
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

}
let db = conn.db("hos08");

export default db;
