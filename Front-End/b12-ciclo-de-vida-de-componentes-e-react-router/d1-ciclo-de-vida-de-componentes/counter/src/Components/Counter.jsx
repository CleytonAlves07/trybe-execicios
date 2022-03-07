import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
  super(props);

  this.state = {
    counter: 0
  }
    
  this.increment = () => this.setState({counter: this.state.counter + 1})
  this.decrement = () => this.setState({counter: this.state.counter - 1})
  }
  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        Counter: {this.state.counter}
      </>
    );
  }
}