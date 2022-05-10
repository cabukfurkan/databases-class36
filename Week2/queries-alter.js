export const alterAuthorsAddColumnMentor = `
    ALTER TABLE authors
    ADD COLUMN mentor INT;`

export const alterAuthorsMakeMentorFK = `
    ALTER TABLE authors
    ADD CONSTRAINT fk_mentor 
    FOREIGN KEY (mentor) 
    REFERENCES authors(author_no);`