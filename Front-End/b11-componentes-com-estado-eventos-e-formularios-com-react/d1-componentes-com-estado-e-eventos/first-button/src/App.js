import React from 'react';
import './App.css';


export default class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick() {
    console.log(this);
    console.log("Clicou no botão 1!");
  }
  handleClick2() {
    console.log("Clicou no botão 2!");
  }
  handleClick3() {
    console.log("Clicou no botão 3!");
  }
  render() {
    console.log(this);
    return (
      <div>
      <button type="button" onClick={this.handleClick}>Botão 1</button>
      <button type="button" onClick={this.handleClick2}>Botão 2</button>
      <button type="button" onClick={this.handleClick3}>Botão 3</button>
    </div>
    );
  }
}


