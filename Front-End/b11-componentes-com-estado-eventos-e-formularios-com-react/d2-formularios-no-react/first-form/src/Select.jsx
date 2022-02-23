import React from 'react';

export default class Select extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return(
        <select value={value} onChange={handleChange}>
        <option value="norte">Norte</option>
        <option value="nordeste">Nordeste</option>
        <option value="sul">Sul</option>
        <option value="sudeste">Sudeste</option>
        <option value="centro-oeste">Centro-Oeste</option>
      </select>
    );
  }
}