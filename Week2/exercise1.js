import mysql from 'mysql'
import util from 'util'
import { createAuthors } from './queries-create.js';
import { alterAuthorsAddColumnMentor, alterAuthorsMakeMentorFK } from './queries-alter.js';
const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword"
});

const execQuery = util.promisify(connection.query.bind(connection))

const seedDatabase = async () => {
    const queryDatabaseDrop = "DROP DATABASE IF EXISTS db_week2;";
    const queryDatabaseCreate = "CREATE DATABASE db_week2;";
    const queryDatabaseUse = "USE db_week2;";

    connection.connect()

    try {
        await execQuery(queryDatabaseDrop)
        await execQuery(queryDatabaseCreate)
        await execQuery(queryDatabaseUse)

        await execQuery(createAuthors)
        await execQuery(alterAuthorsAddColumnMentor)
        await execQuery(alterAuthorsMakeMentorFK)
    } catch (error) {
        console.error(error);
    } finally {
        connection.end()
    }
}

seedDatabase()









