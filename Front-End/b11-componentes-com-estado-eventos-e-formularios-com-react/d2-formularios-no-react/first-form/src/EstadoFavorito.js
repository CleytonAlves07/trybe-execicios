import React from 'react';

export default class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
        <fieldset>
        <legend>Só para testar</legend>
      <label>
          <h4>Descreva em poucas palavras sua experiência com o React</h4>
          <textarea 
          name="estadoFavorito" 
          value={value} 
          onChange={handleChange} 
          />
          <br/>
      </label>
    </fieldset>
    );
  }
}