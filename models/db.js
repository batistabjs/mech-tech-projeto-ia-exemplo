const fs = require('fs');
const path = require('path');

const readData = (filename) => {
  const filePath = path.join(__dirname, '../db', filename);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (filename, data) => {
  const filePath = path.join(__dirname, '../db', filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const generateId = (data) => {
  if (data.length === 0) return 1;
  return Math.max(...data.map(item => item.id)) + 1;
};

module.exports = { readData, writeData, generateId };
