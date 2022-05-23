const data = require("./data.json");

/**
 * This function will drop and recreate the collection of sample data in our csv file.
 * By doing this we ensure that your functions are working on the same data, very similar to how you would set up a test environment.
 *
 * @param {MongoClient} client - The client that is connected to your database
 */
const seedDatabase = async (client) => {
  const hasCollection = await client
    .db("databaseWeek4")
    .listCollections({ name: "accounts" })
    .hasNext();

  if (hasCollection) {
    const bobRossCollection = await client
      .db("databaseWeek4")
      .collection("accounts");

    // Remove all the documents
    await bobRossCollection.deleteMany({});

    // Convert data to array version of elements
    const documents = data.map((dataItem) => {
      const { account_number, balance, account_changes } = dataItem;

      const depictionElementKeys = Object.keys(dataItem).filter(
        (key) => !["account_number", "balance", "account_changes"].includes(key)
      );
      const depictionElements = depictionElementKeys.filter(
        (key) => dataItem[key] === 1
      );

      return {
        account_number: account_number,
        // Remove the extra quotation marks
        // title: TITLE.replaceAll('"', ""),
        balance: balance,
        account_changes: account_changes,
      };
    });

    // Add our documents
    await bobRossCollection.insertMany(documents);
  } else {
    throw Error("The collection `bob_ross_episodes` does not exist!");
  }
};

module.exports = {
  seedDatabase,
};
