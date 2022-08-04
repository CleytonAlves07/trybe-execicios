import React from 'react';

export default class Endereco extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <>
        <label>Endereço:  </label>
        <input type="text" name="endereco" required placeholder="Informe o endereço" maxLength="200" value={value} onChange={handleChange} />
      </>
    );
  }
}