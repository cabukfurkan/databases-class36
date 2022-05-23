async function totalPopulationPerCountry(client, country) {


    const pipeline = [
        {
            '$match': {
                'Country': `${country}`
            }
        }
        ,
        {
            '$group': {
                '_id': '$Year',
                'countPopulation': {
                    '$sum': {
                        '$add': [
                            {
                                '$toInt': '$M'
                            }, {
                                '$toInt': '$F'
                            }
                        ]
                    }
                }
            }
        },
        {
            '$sort': {
                '_id': 1
            }
        }
    ]

    const resultCursor = await client.db("databaseWeek4").collection("population").aggregate(pipeline);
    await resultCursor.forEach(a => {
        console.log(a);
    })
}

async function filterContinents(client, year, age) {

    const pipeline = [
        {
            '$match': {
                'Country': {
                    '$in': [
                        'AFRICA', 'ASIA', 'EUROPE', 'LATIN AMERICA AND THE CARIBBEAN', 'NORTHERN AMERICA', 'OCEANIA'
                    ]
                },
                'Year': `${year}`,
                'Age': `${age}`
            }
        }, {
            '$addFields': {
                'TotalPopulation': {
                    '$add': [
                        {
                            '$toInt': '$M'
                        }, {
                            '$toInt': '$F'
                        }
                    ]
                }
            }
        }
    ]
    const resultCursor = await client.db("databaseWeek4").collection("population").aggregate(pipeline);
    await resultCursor.forEach(a => {
        console.log(a);
    })
}


/* 

*/

module.exports = {
    totalPopulationPerCountry,
    filterContinents,
};
