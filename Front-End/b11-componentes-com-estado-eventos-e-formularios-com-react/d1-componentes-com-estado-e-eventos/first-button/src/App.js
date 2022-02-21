import React from 'react';
import './App.css';


function handleClick2() {
  console.log("Clicou no botão 2!");
}
function handleClick3() {
  console.log("Clicou no botão 3!");
}

export default class App extends React.Component {

  handleClick() {
    console.log(this);
    console.log("Clicou no botão 1!");
  }
  render() {
    console.log(this);
    return (
      <div>
      <button type="button" onClick={this.handleClick}>Botão 1</button>
      <button type="button" onClick={handleClick2}>Botão 2</button>
      <button type="button" onClick={handleClick3}>Botão 3</button>
    </div>
    );
  }
}


