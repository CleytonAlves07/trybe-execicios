import React from 'react';

export default class Date extends React.Component {
  render() {
      const { value , handleChange } = this.props;
    return (
      <input type='date' name='date' value={value} onChange={handleChange} />
    );
  }
}