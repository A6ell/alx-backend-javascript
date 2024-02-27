const fs = require('fs');

/**
 * Counts students in a database.
 * @param {string} path - path to file.
 * @author Abel Demere <https://github.com/ab-ruh>
 */
function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  let lines = data.split('\n');
  lines = lines.filter((line) => line.length > 0 && !line.includes('firstname')); // Remove empty lines and header

  console.log(`Number of students: ${lines.length}`);

  const fields = {};
  for (const line of lines) {
    const student = line.split(',');
    const field = student[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student[0]);
  }

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
