const fs = require('fs/promises');

async function read() {
  try {
    const data = await fs.readFile('database.json', { encoding: 'utf8' })
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = read;