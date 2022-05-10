import mysql from 'mysql'
import { selectAuthorsAndTheirMentors, selectAuthorsAndTheirPaperTitle } from './queries-select.js';

const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "db_week2"
});

const execQueryAndRender = async (query) => {
    connection.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        console.table(results);
    });
};

connection.connect()

await execQueryAndRender(selectAuthorsAndTheirMentors)
await execQueryAndRender(selectAuthorsAndTheirPaperTitle)


connection.end()

