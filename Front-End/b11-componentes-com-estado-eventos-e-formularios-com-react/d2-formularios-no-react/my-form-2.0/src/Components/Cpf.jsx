import React from 'react';

export default class Cpf extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <>
      <label>CPF:  </label>
      <input type="text" name="cpf" required placeholder="CPF" maxLength="11" value={value} onChange={handleChange}/>
      </>
    );
  }
}