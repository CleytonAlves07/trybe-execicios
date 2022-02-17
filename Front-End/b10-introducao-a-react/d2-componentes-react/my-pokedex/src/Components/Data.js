import { Component } from 'react';
import Image from './Image';


class pokemons extends Component {
  render() {   
    return (
      <div className='poke'>
      <div className='text'>
        <div className='name'>
          <p> {this.props.pokemon.name}</p>
        </div>

        <div className='tipo'>
          <p> {this.props.pokemon.type}</p>
        </div>

        <div className='peso'>
          <p>Peso:</p>
          <p> {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>

      </div>

      <div className='image'>
      <Image source={this.props.pokemon.image} alt='Foto Pokemon' />
      </div>
  </div>
    );
  }
}
  
export default pokemons;
