const fs = require('fs/promises');

async function write(data) {
  try {
    await fs.writeFile('database.json', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

module.exports = write;