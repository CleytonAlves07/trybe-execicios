import React from 'react';

export default class Timer extends React.Component {
    constructor() {
      super();
      this.state = {
        seconds: 0,
        phases: ['😲 Inspire...', ' 😣 Segure...', '😮‍💨 Expire...'],
        phasesIndex: 0,
      }
    }

    componentDidMount() {
      const oneSecond = 1000;
      setInterval(() => {
          this.setState((prevState) => ({
              seconds: prevState.seconds + 1
          }))
      }, oneSecond)
    }
  render() {
      const { seconds, phases, phasesIndex } = this.state;
    return (
      <section>
        <h1>{ phases[phasesIndex] }</h1>
        <h2>{seconds}</h2>
      </section>
    );
  }
}