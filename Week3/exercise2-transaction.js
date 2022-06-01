const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
    const sendMoney = `
                      UPDATE account
                      SET balance = balance - 1000
                      WHERE accountNumber = 101;`;
    const receiveMoney = `
                      UPDATE account
                      SET balance = balance + 1000
                      WHERE accountNumber = 102;`;

    const insertIntoAccountChanges = `
    INSERT INTO accountChanges (changeNumber, accountNumber, amount, changedDate, remark) VALUES ? ;`;
    const accountOperations = [
        [6, 101, 1000, '2022-04-04 12:19:12', 'Sent'],
        [7, 102, 1000, '2022-04-05 22:22:22', 'Received'],
    ];


    await connection.beginTransaction(function (err) {
        if (err) { throw err; }
        connection.query(`
        UPDATE account
        SET balance = balance - 1000
        WHERE accountNumber = 101;`, function (error) {
            if (error) {
                return connection.rollback(function () {
                    throw error;
                });
            }

            connection.query(`
            UPDATE account
            SET balance = balance + 1000
            WHERE accountNumber = 102;`, function (error) {
                if (error) {
                    return connection.rollback(function () {
                        throw error;
                    });
                }
            });
            connection.query(`
            INSERT INTO accountChanges (changeNumber, accountNumber, amount, changedDate, remark) VALUES ? ;`, [accountOperations], function (error, results, fields) {
                if (error) {
                    return connection.rollback(function () {
                        throw error;
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        return connection.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('success!');
                });
            });
        });
    });
    /*   try {
          await execQuery('START TRANSACTION');
          await execQuery(sendMoney);
          await execQuery(receiveMoney);
          await execQuery(insertIntoAccountChanges, [accountOperations]);
          await execQuery('COMMIT');
      } catch (error) {
          console.error(error);
          await execQuery('ROLLBACK');
      } */
}

seedDatabase();