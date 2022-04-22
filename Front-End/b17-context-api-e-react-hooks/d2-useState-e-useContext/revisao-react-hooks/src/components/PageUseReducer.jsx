import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return {
        counter: state.counter + 1,
      }
    case "-":
      return {
        counter: state.counter -1,
      }
    default:
      return state;
  }
}

const PageUseReducer = () => {
const [state, dispatch] = useReducer(reducer, { counter: 0})

  return (
    <div>
      <p>Utilizando UseReducer</p>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "+"})}>+</button>
      <button onClick={() => dispatch({ type: "-"})}>-</button>
    </div>
  );
}
export default PageUseReducer;