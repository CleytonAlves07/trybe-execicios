import { Component } from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

const { all } = this.props;
class Pokemons extends Component {
  render() {   
    return (
      <div className='poke'>
      <div className='text'>
        <div className='name'>
          <p> {all.pokemon.name}</p>
        </div>

        <div className='tipo'>
          <p> {all.pokemon.type}</p>
        </div>

        <div className='peso'>
          <p>Peso:</p>
          <p> {all.pokemon.averageWeight.value} {all.pokemon.averageWeight.measurementUnit}</p>
        </div>

      </div>

      <div className='image'>
      <Image source={all.pokemon.image} alt='Foto Pokemon' />
      </div>
  </div>
    );
  }
}

Pokemons.propTypes = {
  pokemons: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  })
}

  
export default Pokemons;
