const csvtojson = require("csvtojson");

/**
 * This function will drop and recreate the collection of sample data in our csv file.
 * By doing this we ensure that your functions are working on the same data, very similar to how you would set up a test environment.
 *
 * @param {MongoClient} client - The client that is connected to your database
 */
const seedDatabase = async (client) => {
    const hasCollection = await client
        .db("databaseWeek4")
        .listCollections({ name: "population" })
        .hasNext();

    if (hasCollection) {
        const populationCollection = await client
            .db("databaseWeek4")
            .collection("population");

        // Remove all the documents
        await populationCollection.deleteMany({});
    }

    // CSV file name
    let arrayToInsert = [];
    await csvtojson().fromFile("./population_pyramid_1950-2022.csv").then(source => {
        // Fetching the all data from each row
        for (let i = 0; i < source.length; i++) {
            let oneRow = {
                Country: source[i]["Country"],
                Year: source[i]["Year"],
                Age: source[i]["Age"],
                M: source[i]["M"],
                F: source[i]["F"]
            };
            arrayToInsert.push(oneRow);
        }

        client.db('databaseWeek4').collection("population")
            .insertMany(arrayToInsert, (err, result) => {
                if (err) console.log(err);
                if (result) {
                    console.log("Import CSV into database successfully.");
                }
            });
    });

};

module.exports = {
    seedDatabase
};