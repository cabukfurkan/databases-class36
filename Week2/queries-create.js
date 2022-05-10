export const createAuthors = `
    CREATE TABLE IF NOT EXISTS authors (
        author_no INT NOT NULL AUTO_INCREMENT,
        author_name VARCHAR(100),
        university VARCHAR(200),
        date_of_birth DATE,
        h_index TEXT,
        gender ENUM ('M', 'F'),
        PRIMARY KEY (author_no));`

export const createResearch_Papers = `
    CREATE TABLE IF NOT EXISTS research_Papers (
        paper_id INT NOT NULL AUTO_INCREMENT,
        paper_title VARCHAR(300),
        publish_date DATE,
        conference TEXT,
        PRIMARY KEY (paper_id));`


export const createResearch_PapersAndAuthors = `
    CREATE TABLE IF NOT EXISTS research_PapersAndAuthors (
        author_no INT,
        paper_id INT,
        FOREIGN KEY(paper_id) REFERENCES research_Papers(paper_id),
        FOREIGN KEY(author_no) REFERENCES authors(author_no),
        PRIMARY KEY (author_no, paper_id));`;