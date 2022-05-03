import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "new_world",
});

connection.connect();

const execQuery = (query) => {
    connection.query(query, (error, results) => {
        if (error) {
            throw error;
        } else {
            console.table(results);
        }
    });
};

const queryCountriesGreater8m = `
SELECT Name 
FROM country 
WHERE Population > 8000000;`

const queryCountriesWLandInIt = `
SELECT Name 
FROM country 
WHERE Name LIKE '%land%';`

const queryCitiesBw5t1m = `
SELECT Name 
FROM city 
WHERE Population BETWEEN 500000 AND 1000000;`

const queryCountriesInEu = `
SELECT Name 
FROM country 
WHERE Continent = 'Europe';`

const queryCountriesOrderDesc = `
SELECT Name 
FROM country 
ORDER BY SurfaceArea DESC;`

const queryCitiesInNl = `
SELECT Name 
FROM city 
WHERE CountryCode = 'NLD';`

const queryPopulationRotterdam = `
SELECT Population 
FROM city 
WHERE Name = 'Rotterdam';`

const queryCountriesBigTop10 = `
SELECT * 
FROM country 
ORDER BY SurfaceArea DESC 
LIMIT 10;`

const queryCitiesCrowdedTop10 = `
SELECT * 
FROM city 
ORDER BY Population DESC 
LIMIT 10;`

const queryPopulationWorld = `
SELECT SUM(Population) 
FROM country;`

execQuery(queryCountriesGreater8m);
execQuery(queryCountriesWLandInIt);
execQuery(queryCitiesBw5t1m);
execQuery(queryCountriesInEu);
execQuery(queryCountriesOrderDesc);
execQuery(queryCitiesInNl);
execQuery(queryPopulationRotterdam);
execQuery(queryCountriesBigTop10);
execQuery(queryCitiesCrowdedTop10);
execQuery(queryPopulationWorld);

connection.end();