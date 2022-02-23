import React from 'react';

export default class Number extends React.Component {
  render() {
      const { value, handleChange } = this.props;
    return (
        <input type='number' name='number' value={value} onChange={handleChange} />
    );
  }
}