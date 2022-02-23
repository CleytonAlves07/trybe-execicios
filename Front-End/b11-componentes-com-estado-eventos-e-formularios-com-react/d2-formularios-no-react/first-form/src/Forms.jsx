import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';
import Number from './Number';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        estadoFavorito: '',
        value: "nordeste",
        email: '',
        number: 0,
        date: '',
        checkbox: false,
    };
  }

  handleChange({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState ({
        [name]: value,
      });
  }
 
  render() {
    return (
      <>
      <h1>React e você!</h1>
      <form>
          <EstadoFavorito 
          value={this.state.estadoFavorito} 
          handleChange={this.handleChange}
          />
          <label>Informe sua Região</label>
          <br/>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="norte">Norte</option>
          <option value="nordeste">Nordeste</option>
          <option value="sul">Sul</option>
          <option value="sudeste">Sudeste</option>
          <option value="centro-oeste">Centro-Oeste</option>
        </select>
        <br/>
        <Email 
        value={this.state.email} 
        handleChange={this.handleChange} 
        />
        <br/>
        <Number 
        value{this.state.number} 
        handleChange={this.handleChange}
        />
        <br/>
        <input type='date' name='date' value={this.state.date} onChange={this.handleChange} />
        <br/>
        <input type='checkbox' name='checkbox' value={this.state.checkbox} onChange={this.handleChange} />
        <br/>
        <input type="file" />
        <input type='submit' value="Enviar" />
      </form>
      </>
    );
  }
}