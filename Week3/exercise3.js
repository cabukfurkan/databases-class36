const prompt = require('prompt');
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world',
    multipleStatements: true,
});

const input = util.promisify(prompt.get.bind(this));

function callback(error, result) {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(result);
}

// without prevention for SQL-injection
// ANSWER FOR EXERCISE-3.1 ==>> name: 'OR''1=1' and code: 'OR''1=1'

// with prevention for SQL-injection
function getPopulationSecurely(Country, name, code, callback) {
    connection.query(
        `SELECT Population FROM ${Country}
     WHERE Name = ` +
        connection.escape(name) +
        `and code = ` +
        connection.escape(code),
        function (err, result) {
            if (err) callback(err);
            if (result.length == 0) callback(new Error('Not found'));
            callback(null, result);
        },
    );
}

async function queryDatabase() {
    let tableName = '';
    let countryName = '';
    let countryCode = '';

    prompt.start();

    try {
        const result1 = await input(['Table Name']);
        tableName = result1['Table Name'];

        const result2 = await input(['Country Name']);
        countryName = result2['Country Name'];

        const result3 = await input(['Country Code']);
        countryCode = result3['Country Code'];

        connection.connect();

        getPopulationSecurely(tableName, countryName, countryCode, callback);
    } catch (error) {
        console.error(error);
    }

    connection.end();
}

queryDatabase();