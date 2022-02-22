import React from 'react';


class Image extends React.Component {
    render() {
        const freestyle = {
            borderRadius: '10px',
            width: '200px',
            
        };
        return <img style={freestyle} src={this.props.source} alt={this.props.alternativeText} />
    }
}

export default Image;