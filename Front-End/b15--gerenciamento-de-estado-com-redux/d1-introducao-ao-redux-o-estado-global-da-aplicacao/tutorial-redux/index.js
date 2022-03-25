//Inportar por aqui ou pelo html
const Redux = require('redux');

//Função que retorna uma action (ActionCreator)
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email
});

//Estado inicial 
const ESTADO_INICIAL = {
  login: false,
  email: '',
}

//Reducer - Manipula o store seguindo as regras definidas pelas Actions
const reducer = (state = ESTADO_INICIAL, action) => {
  //Action para, se for o caso, executar no store
  switch (action.type) {
    case 'LOGIN':
      return {
        //É importante colocar o spreed com o state, pois existe um comportamento de sobscrever 
        ...state,
        LOGIN: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

//Criação de um store para a função
const store = Redux.createStore(reducer);

//Despachando algo para o store
store.dispatch(fazerLogin('alguem@email.com'));

//Pegando o state do store 
console.log(store.getState());