import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
});

const queryDropDatabase = "DROP DATABASE IF EXISTS meetup;";

const queryCreateDatabase = "CREATE DATABASE meetup;";

const queryUseDatabase = "USE meetup;";

const queryCreateInviteTable = `CREATE TABLE Invitee(
  invitee_no SMALLINT, 
  invitee_name VARCHAR(30), 
  invited_by VARCHAR(30)
);`;

const queryCreateMeetingTable = `CREATE TABLE Meeting(
  meeting_no SMALLINT, 
  meeting_title VARCHAR(100), 
  starting_time DATETIME, 
  ending_time DATETIME, 
  room_no SMALLINT
);`;

const queryCreateRoomTable = `CREATE TABLE Room(
  room_no SMALLINT, 
  room_name VARCHAR(30), 
  floor_number TINYINT
);`;

const queryInsertIntoInvitee = `INSERT INTO Invitee (
  invitee_no, invitee_name, invited_by) 
VALUES 
  (1, 'Edward', 'Rob'),
  (2, 'Mohammed', 'Rob'),
  (3, 'Ali', 'Rob'),
  (4, 'Suleyman', 'Rob'),
  (5, 'Radhi', 'Rob');`;

const queryInsertIntoMeeting = `INSERT INTO Meeting (
  meeting_no, meeting_title, starting_time, ending_time, room_no)
VALUES 
  (1, 'HTML CSS GIT', '2022-05-02 10:00:00', '2022-05-02 11:00:00', 701),
  (2, 'JAVASCRIPT', '2022-05-02 10:00:00', '2022-05-02 11:00:00', 702),
  (3, 'BROWSERS', '2022-05-02 11:00:00', '2022-05-02 12:00:00', 703),
  (4, 'NODEJS', '2022-05-02 11:00:00', '2022-05-02 12:00:00', 704),
  (5, 'DATABASES', '2022-05-02 12:00:00', '2022-05-02 13:00:00', 705);`;

const queryInsertIntoRoom = `INSERT INTO Room (
  room_no, room_name, floor_number) 
  VALUES 
  (701, 'Alkmaar', 7),
  (702, 'Den Helder', 7),
  (703, 'Utrecht', 7),
  (704, 'Rotterdam', 7),
  (705, 'Haarlem', 7);`;

const execQuery = (query) => {
  connection.query(query, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results);
    }
  });
};

connection.connect();

execQuery(queryDropDatabase);
execQuery(queryCreateDatabase);
execQuery(queryUseDatabase);
execQuery(queryCreateInviteTable);
execQuery(queryCreateMeetingTable);
execQuery(queryCreateRoomTable);
execQuery(queryInsertIntoInvitee);
execQuery(queryInsertIntoMeeting);
execQuery(queryInsertIntoRoom);

connection.end();