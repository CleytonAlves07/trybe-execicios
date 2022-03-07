import React from 'react';
import Timer from './Components/Timer';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTimer: false
    };
  }
  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer}));
  }
  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <main>
          { showTimer && <Timer /> }

          <button type="button" onClick={ this.toggleTimer }>
            {showTimer ? 'Desligado' : 'Ligar'}  
          </button>
        </main>
      </div>
      );
  }
  
}


