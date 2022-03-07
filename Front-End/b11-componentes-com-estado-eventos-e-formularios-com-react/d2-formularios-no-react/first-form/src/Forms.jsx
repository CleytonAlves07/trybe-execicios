import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';
import Number from './Number';
import Date from './Date';
import Select from './Select';

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
          <Select 
          value={this.state.value} 
          handleChange={this.handleChange}
          />
        <br/>
        <Email 
        value={this.state.email} 
        handleChange={this.handleChange} 
        />
        <br/>
        <Number 
        value={this.state.number} 
        handleChange={this.handleChange}
        />
        <br/>
        <Date 
        value={this.state.date} 
        handleChange={this.handleChange}
        />
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