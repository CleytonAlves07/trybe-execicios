const test = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
    console.log(`O que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  test(true);