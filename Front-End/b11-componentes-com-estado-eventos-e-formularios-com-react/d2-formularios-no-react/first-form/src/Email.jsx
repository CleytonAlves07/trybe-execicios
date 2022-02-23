import React from 'react';

export default class Email extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
        <input type="email" name="email" value={value} onChange={handleChange} />
    );
  }
}