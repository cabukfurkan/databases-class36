const { MongoClient, ServerApiVersion } = require("mongodb");
const { seedDatabase } = require('./seedDatabase.js')
const { totalPopulationPerCountry, filterContinents } = require('./aggregationFunctions.js')
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
        await totalPopulationPerCountry(client, "Netherlands");
        await filterContinents(client, "1960", "5-9");
        await seedDatabase(client);

    } catch (err) {
        console.error(err);
    }
    finally {
        // await client.close();
    }
}

main();