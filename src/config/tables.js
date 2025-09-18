export const studentsTableFields = [
    { heading: "Student Id", fieldName: 'id' },
    { heading: "Student Name", fieldName: 'title' },
    { heading: "Student Age", fieldName: 'age' },
    { heading: "Action", fieldName: 'View', fieldType: 'link', base:'/students/details',  param:'id'}
]

export const booksTableFields = [
    { heading: "Book Id", fieldName: 'id' },
    { heading: "Book Name", fieldName: 'title' },
    { heading: "Book Author", fieldName: 'author' },
]