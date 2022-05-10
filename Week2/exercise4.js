import mysql from 'mysql'
import { selectPapersAndTheNumbersOfAuthors, selectSumOfResearchPapersByFemale, selectAvgOfHIndexAuthorsPerUni, selectSumOfResearchPapersOfAuthorsPerUni, selectMinAndMaxHIndexOfAuthorsPerUni } from './queries-select.js';

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

await execQueryAndRender(selectPapersAndTheNumbersOfAuthors)
await execQueryAndRender(selectSumOfResearchPapersByFemale)
await execQueryAndRender(selectAvgOfHIndexAuthorsPerUni)
await execQueryAndRender(selectSumOfResearchPapersOfAuthorsPerUni)
await execQueryAndRender(selectMinAndMaxHIndexOfAuthorsPerUni)


connection.end()

