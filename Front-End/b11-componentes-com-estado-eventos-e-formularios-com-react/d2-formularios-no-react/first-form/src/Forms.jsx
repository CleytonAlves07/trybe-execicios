import React, { Component } from 'react';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
        estadoFavorito: '',
        value: "nordeste",
    };
  }

  handleChange(e) {
      this.setState ({
          estadoFavorito: e.target.value,
      });
  }
  handleSelect(e) {
      this.setState ({
          value: e.target.value,
      });
  }
  render() {
    return (
      <>
      <h1>React e você!</h1>
      <form>
          <label>
            <h4>Descreva em poucas palavras sua experiência com o React</h4>
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
        
      </form>
      </>
    );
  }
}