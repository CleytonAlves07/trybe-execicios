const fs = require('fs');

const learnNode = 'learnNode.txt';

try {
  const data = fs.readFileSync(learnNode, 'utf8');
  console.log(data);
} catch (e) {
  console.error(`Erro ao ler o arquivo: ${e.path}`);
  console.log(e.message);
}