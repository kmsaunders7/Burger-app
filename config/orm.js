// Import MySQL connection.
const connection = require('./connection.js');

// print question marks
const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };

// selectAll()
// insertOne()
// updateOne()

// Export the orm object for the model (burger.js).
module.exports = orm;