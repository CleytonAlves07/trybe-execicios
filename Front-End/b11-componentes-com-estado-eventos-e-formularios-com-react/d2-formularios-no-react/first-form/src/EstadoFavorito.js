import React from 'react';

export default class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if (value.length > 120) 
        error = 'Texto muito grande'
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
          <span>{error ? error : ''}</span>
      </label>
    </fieldset>
    );
  }
}