import React from 'react';
import './App.css';


export default class App extends React.Component {
  constructor() {
    super();

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }
  handleClick1() {
    // console.log(this);
    this.setState((estadoAnterior, _props) =>({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }), () => {
      console.log(`Botão 1 ${this.colorButton(this.state.numeroDeCliques1)}`)
    });
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }), () => {
      console.log(`Botão 2 ${this.colorButton(this.state.numeroDeCliques2)}`)
    })
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }), () => {
      console.log(`Botão 3 ${this.colorButton(this.state.numeroDeCliques3)}`)
    })
  }
  colorButton(num) {
    return num % 2 === 0 ? "green" : "white";
  }
  render() {
    // console.log(this);
    const {handleClick1, handleClick2, handleClick3} = this.state;
    return (
      <div>
      <button type="button" onClick={this.handleClick1} style={{backgroundColor: this.colorButton(handleClick1)}}>{this.state.numeroDeCliques1} </button>
      <button type="button" onClick={this.handleClick2} style={{backgroundColor: this.colorButton(handleClick2)}}>{this.state.numeroDeCliques2} </button>
      <button type="button" onClick={this.handleClick3} style={{backgroundColor: this.colorButton(handleClick3)}}>{this.state.numeroDeCliques3}</button>
    </div>
    );
  }
}


