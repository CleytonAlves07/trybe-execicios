import React from 'react';

export default class Cidade extends React.Component {
  render() {
      const { value , handleChange } = this.props
    return (
      <>
        <label>Cidade:  </label>
        <input type="text" name="cidade" required placeholder="Informe a cidade"  maxLength="28" value={value} onChange={handleChange}/>
      </>
    );
  }
}