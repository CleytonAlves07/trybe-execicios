import React from 'react';

export default class Fullname extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <>
        <label>Name:  </label>
        <input type="text" name="name" required placeholder="Informe seu nome" maxLength="40" value={value} onChange={handleChange} />
      </>
    );
  }
}