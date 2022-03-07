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
      this.setIntervalId = setInterval(() => {
          this.setState((prevState) => ({
              seconds: prevState.seconds + 1
          }))
      }, oneSecond)
    }

    componentDidUpdate(_prevProps, prevState) {
        const limitTime = 5;
        if(prevState.seconds === limitTime) {
            this.setState({
              seconds: 0,
              phasesIndex: prevState.phasesIndex === 2 ? 0 : prevState.phasesIndex + 1                
            })
        }
    }

    componentWillUnmount() {
      clearInterval(this.setIntervalId);
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