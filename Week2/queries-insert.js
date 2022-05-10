
export const insertIntoAuthors = `
    INSERT INTO 
      authors (  author_name, university, date_of_birth, h_index, gender,mentor) 
    VALUES 
        ('Alfa', 'Harvard University.', '1994-01-01',10,'M',3),
        ('Bravo', 'Massachusetts Institute of Technology', '1994-01-01',11,'F',5),
        ('Charlie', 'Stanford University', '1994-01-01',12,'M',7),
        ('Delta', 'Stanford University.', '1994-01-01',13,'F',9),
        ('Echo', 'University of Oxford', '1994-01-01',14,'M',11),
        ('Foxtrot', 'University of Oxford', '1994-01-01',15,'F',13),
        ('Golf', 'University of California--Berkeley', '1994-01-01',16,'M',15),
        ('Hotel', 'University of Oxford', '1994-01-01',17,'F',1),
        ('Juliet', 'University of California--Berkeley', '1994-01-01',18,'M',2),
        ('Kilo', 'University of Oxford', '1994-01-01',19,'F',4),
        ('Lima', 'University of Oxford', '1994-01-01',20,'M',6),
        ('Mike', 'University of Washington', '1994-01-01',21,'F',8),
        ('November', 'University of Washington', '1994-01-01',22,'M',10),
        ('Oscar', 'University of Oxford', '1994-01-01',23,'F',12),
        ('Papa', 'University of Washington', '1994-01-01',24,'F',14)`;

export const insertIntoResearch_Papers = `
  INSERT INTO
    research_Papers( paper_title, publish_date, conference)
  VALUES
  ( 'Ferrocifen', '2022-08-05','conference'),
  ( 'Emergence and Spread', '2022-08-05','conference'),
  ( 'The Role of mobile genetic', '2022-08-05','conference'),
  ( 'Mass Spectrometric', '2022-08-05','conference'),
  ( 'Computer Engineering', '2022-08-05','conference'),
  ( 'HTML', '2022-08-05','conference'),
  ( 'CSS', '2022-08-05','conference'),
  ( 'JavaScript', '2022-08-05','conference'),
  ( 'NodeJs', '2022-08-05','conference'),
  ( 'TypeScript', '2022-08-05','conference'),
  ( 'Java', '2022-08-05','conference'),
  ( 'Python', '2022-08-05','conference'),
  ( 'React', '2022-08-05','conference'),
  ( 'C++', '2022-08-05','conference'),
  ( 'C', '2022-08-05','conference'),
  ( 'C#', '2022-08-05','conference'),
  ( 'Microsoft', '2022-08-05','conference'),
  ( 'Apple', '2022-08-05','conference'),
  ( 'NPM', '2022-08-05','conference'),
  ( 'Express', '2022-08-05','conference'),
  ( 'Mongo', '2022-08-05','conference'),
  ( 'Module', '2022-08-05','conference'),
  ( 'CasperSky', '2022-08-05','conference'),
  ( 'Virus', '2022-08-05','conference'),
  ( 'Air', '2022-08-05','conference'),
  ( 'Stone', '2022-08-05','conference'),
  ( 'Water', '2022-08-05','conference'),
  ( 'Wood', '2022-08-05','conference'),
  ( 'Fire', '2022-08-05','conference'),
  ( 'Magma', '2022-08-05','conference')`;

export const insertIntoResearch_PapersAndAuthors = `
  INSERT INTO
      research_PapersAndAuthors( author_no, paper_id)
    VALUES
    (1,1),
    (1,2),
    (1,3),
    (1,4),
    (2,5),
    (3,6),
    (4,7),
    (7,8),
    (3,9),
    (9,10),
    (7,11),
    (7,12),
    (7,13),
    (9,14),
    (12,15),
    (13,16),
    (14,17),
    (15,18),
    (6,19),
    (6,20),
    (12,21),
    (11,22),
    (10,23),
    (15,24),
    (12,25),
    (13,26),
    (14,27),
    (10,28),
    (13,29),
    (9,30)
  `