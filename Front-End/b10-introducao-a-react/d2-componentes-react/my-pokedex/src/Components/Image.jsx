import { Component } from 'react';

class Image extends Component {
    render() {
        return  <img className='pokeimg' src={this.props.source} alt={this.props.alternativeText} />
    }
}

export default Image;