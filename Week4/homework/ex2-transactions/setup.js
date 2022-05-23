const { MongoClient, ServerApiVersion } = require("mongodb");
const { seedDatabase } = require("./seedDatabase.js");
require('dotenv').config()





async function main() {
    if (process.env.MONGODB_URL == null) {
        throw Error(
            `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
        );
    }
    const client = new MongoClient(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });

    try {
        await client.connect();

        // Seed our database
        await seedDatabase(client);

    } catch (err) {
        console.error(err);
    } finally {
        // Always close the connection at the end
        client.close();
    }
}

main();


