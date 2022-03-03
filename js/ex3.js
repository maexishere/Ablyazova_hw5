//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functions and map a new array of objects

const cLastNameResults = studentList.filter(student => student.lastName.startsWith("C")).map(student => {
    return {
        FirstName: student.firstName,
        LastName: student.lastName,
        minScore: Math.min(...student.scores),
        maxScore: Math.max(...student.scores),
        avgScore: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
    };
});

//Output
console.log(cLastNameResults);
