import { Component } from 'react';

class Image extends Component {
    render() {
        return <img className="imgprofile" src={this.props.source} alt={this.props.alternativeText} />
    }
}

export default Image;