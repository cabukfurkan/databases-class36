import mysql from 'mysql'
import util from 'util'
import { createResearch_Papers, createResearch_PapersAndAuthors } from './queries-create.js';
import { insertIntoAuthors, insertIntoResearch_Papers, insertIntoResearch_PapersAndAuthors } from './queries-insert.js';
import { truncateAuthors, truncateResearch_Papers, truncateResearch_PapersAndAuthors } from './queries-delete.js';

const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "db_week2"
});

const execQuery = util.promisify(connection.query.bind(connection))

const seedDatabase = async () => {
    connection.connect()

    const cancelFKCheck = "SET FOREIGN_KEY_CHECKS = 0;"; //added for removing errors when inserting data into authors table

    try {
        await execQuery(createResearch_Papers)
        await execQuery(createResearch_PapersAndAuthors)
        await execQuery(cancelFKCheck)
        await execQuery(truncateAuthors)
        await execQuery(insertIntoAuthors)
        await execQuery(truncateResearch_Papers)
        await execQuery(insertIntoResearch_Papers)
        await execQuery(truncateResearch_PapersAndAuthors)
        await execQuery(insertIntoResearch_PapersAndAuthors)
    } catch (error) {
        console.error(error);
    }

    connection.end()
}

seedDatabase()









