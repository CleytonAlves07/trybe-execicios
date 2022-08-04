const getId = require('./script.js');

describe('testando a função getId', () => {
  it('testar se localStorage é chamado com a função getId', async () => {
    getId();
    expect(localStorage.setItem).toBeenCalled();
  });
});