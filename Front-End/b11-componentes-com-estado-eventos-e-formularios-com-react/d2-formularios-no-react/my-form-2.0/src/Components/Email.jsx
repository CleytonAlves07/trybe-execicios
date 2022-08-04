import React from 'react';

export default class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <>
        <label>Email:  </label>
        <input type="email" name="email" required placeholder="Informe seu email" maxLength="50"
        value={value} onChange={handleChange}/>
      </>
    );
  }
}