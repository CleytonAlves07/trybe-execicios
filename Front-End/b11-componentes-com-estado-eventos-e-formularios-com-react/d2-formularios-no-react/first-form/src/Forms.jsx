import React, { Component } from 'react';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this);

    this.state = {
        estadoFavorito: '',
        value: "nordeste",
        email: '',
        number: 0,
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
  handleEmail(e) {
      this.setState ({
          email: e.target.value,
      });
  }
  handleNumber(e) {
      this.setState ({
          number: e.target.value,
      })
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
          <label>Informe sua Região</label>
        <select value={this.state.value} onChange={this.handleSelect}>
          <option value="norte">Norte</option>
          <option value="nordeste">Nordeste</option>
          <option value="sul">Sul</option>
          <option value="sudeste">sudeste</option>
          <option value="centro-oeste">Centro-Oeste</option>
        </select>
        <input type="email" name="email" value={this.state.email} onChange={this.handleEmail} />
        <input type="number" name="number" value={this.state.number} onChange={this.handleNumber} />
      </form>
      </>
    );
  }
}