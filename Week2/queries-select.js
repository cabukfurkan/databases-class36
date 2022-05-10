export const selectAuthorsAndTheirMentors = `
    SELECT  authors.author_no AS 'Author ID',
    authors.author_name AS 'Author Name',
    mentors.author_name AS 'Mentor Name'
    FROM authors
    JOIN authors mentors
    ON authors.mentor = mentors.author_no;`

export const selectAuthorsAndTheirPaperTitle = `
    SELECT authors.*, paper_title
    FROM authors
    LEFT JOIN research_PapersAndAuthors ON (authors.author_no = research_PapersAndAuthors.author_no)
    LEFT JOIN research_Papers ON (research_Papers.paper_id=research_PapersAndAuthors.paper_id)`

export const selectPapersAndTheNumbersOfAuthors = `SELECT paper_title AS 'Paper Title',
    COUNT(research_Papers.paper_title) AS 'Number of Authors' 
    FROM authors 
    JOIN research_PapersAndAuthors ON (authors.author_no = research_PapersAndAuthors.author_no)
    JOIN research_Papers ON (research_Papers.paper_id = research_PapersAndAuthors.paper_id)
    GROUP BY research_Papers.paper_title;`

export const selectSumOfResearchPapersByFemale = `
    SELECT COUNT(DISTINCT(research_Papers.paper_title)) AS 'Sum of Papers by Female'
    FROM authors
    JOIN research_PapersAndAuthors ON (authors.author_no = research_PapersAndAuthors.author_no)
    JOIN research_Papers ON (research_Papers.paper_id = research_PapersAndAuthors.paper_id)
    GROUP BY authors.gender
    HAVING gender = 'F';`

export const selectAvgOfHIndexAuthorsPerUni = `
    SELECT authors.university AS University,
    ROUND(AVG(authors.h_index), 2) AS 'Average of H-Index'
    FROM authors 
    GROUP BY authors.university;`

export const selectSumOfResearchPapersOfAuthorsPerUni = `
    SELECT authors.university AS University, COUNT(authors.author_name) AS 'Sum of Research Papers'
    FROM authors 
    JOIN research_PapersAndAuthors ON (authors.author_no = research_PapersAndAuthors.author_no)
    JOIN research_Papers ON (research_Papers.paper_id = research_PapersAndAuthors.paper_id)
    GROUP BY authors.university
    ORDER BY authors.university;`

export const selectMinAndMaxHIndexOfAuthorsPerUni = `
    SELECT university AS University, MIN(h_index) AS 'Min H-Index', MAX(h_index) AS 'Max H-Index'
    FROM authors
    GROUP BY university
    ORDER BY university;`