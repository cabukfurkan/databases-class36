const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  const queryDatabaseDrop = "DROP DATABASE IF EXISTS userdb;";
  const queryDatabaseCreate = "CREATE DATABASE userdb;";
  const queryDatabaseUse = "USE userdb;";

  const createTableAccount = `
  CREATE TABLE account (
    accountNumber INT,
    balance BIGINT,
    PRIMARY KEY (accountNumber)
  );`;

  const createTableAccountChanges = `
  CREATE TABLE accountChanges (
    changeNumber INT,
    accountNumber INT,
    amount BIGINT,
    changedDate DATETIME,
    remark TEXT,
    FOREIGN KEY (accountNumber) REFERENCES account(accountNumber),
    PRIMARY KEY (changeNumber, accountNumber)
  );`;

  connection.connect();

  try {
    await execQuery('START TRANSACTION');
    await execQuery(queryDatabaseDrop);
    await execQuery(queryDatabaseCreate);
    await execQuery(queryDatabaseUse);
    await execQuery(createTableAccount);
    await execQuery(createTableAccountChanges);

    await execQuery('COMMIT');
  } catch (error) {
    console.error(error);
    await execQuery('ROLLBACK');
    connection.end();
  }

  connection.end();
}

seedDatabase();