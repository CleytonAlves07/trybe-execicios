import React from 'react';
import Fullname from './Fullname';
import Email from './Email';
import Cpf from './Cpf';
import Cidade from './Cidade';
import Endereco from './Endereco';
import Estado from './Estado';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        name: '',
        email: '',
        cpf: '',
        cidade: '',
        endereco: '',
        estado: 'AC',
        
    }
  }
  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    this.setState ({
        [name]: value,
    })
  }
  
  render() {
    return(
        <>
            <fieldset>
                <Fullname value={this.state.name} handleChange={this.handleChange} />
                <Email value={this.state.email} handleChange={this.handleChange} />
                <Cpf value={this.state.cpf} handleChange={this.handleChange} />
                <Cidade value={this.state.cidade} handleChange={this.handleChange}/>
                <Endereco value={this.state.endereco} handleChange={this.handleChange}/>
                <Estado value={this.state.estado} handleChange={this.handleChange}/>

                <label>Informo o tipo de moradia:</label>
                <input type="radio" value="Casa" name="radio" /> Casa
                <input type="radio" value="Apartamento" name="radio"/> Apartamento
            </fieldset>
        </>
       
    );
  }
}