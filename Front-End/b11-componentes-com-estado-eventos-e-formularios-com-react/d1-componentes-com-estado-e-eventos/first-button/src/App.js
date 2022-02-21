import React from 'react';
import './App.css';


export default class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0
    }
  }
  handleClick() {
    // console.log(this);
    this.setState((estadoAnterior, _props) =>({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  render() {
    // console.log(this);
    return (
      <div>
      <button type="button" onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      <button type="button" onClick={this.handleClick2}>{this.state.numeroDeCliques1}</button>
      <button type="button" onClick={this.handleClick3}>{this.state.numeroDeCliques2}</button>
    </div>
    );
  }
}


