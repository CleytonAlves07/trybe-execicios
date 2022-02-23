import React from 'react';
import Fullname from './Fullname';
import Email from './Email';
import Cpf from './Cpf';
import Cidade from './Cidade';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        Fullname: '',
        email: '',
        cpf: '',
        cidade: '',
        endereco: '',
        estado: '(AC)',
    }
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState ({
        [name]: value,
    })
  }
  render() {
    return(
        <>
            <fieldset>
                <Fullname value={this.state.Fullname} handleChange={this.handleChange} />
                <Email value={this.state.email} handleChange={this.handleChange} />
                <Cpf value={this.state.cpf} handleChange={this.handleChange} />
                <Cidade value={this.state.cidade} handleChange={this.handleChange}/>

                <label>Endereço:  </label>
                <input type="text" name="endereco" required placeholder="Informe o endereço" maxLength="200" />

                <label>Estado:  </label>
                <select required>
                    <option value="(AC)">Acre </option>
                    <option value="(AL)">Alagoas </option>
                    <option value="(AP)">Amapá </option>
                    <option value="(AM)">Amazonas </option>
                    <option value="(BA)">Bahia </option>
                    <option value="(CE)">Ceará </option>
                    <option value="(DF)">Distrito Federal </option>
                    <option value="(ES)">Espírito Santo </option>
                    <option value="(GO)">Goiás </option>
                    <option value="(MA)">Maranhão </option>
                    <option value="(MT)">Mato Grosso </option>
                    <option value="(MS)">Mato Grosso do Sul </option>
                    <option value="(MG)">Minas Gerais </option>
                    <option value="(PA)">Pará </option>
                    <option value="(PB)">Paraíba </option>
                    <option value="(PR)">Paraná </option>
                    <option value="(PE)">Pernambuco </option>
                    <option value="(PI)">Piauí </option>
                    <option value="(RJ)">Rio de Janeiro </option>
                    <option value="(RN)">Rio Grande do Norte </option>
                    <option value="(RS)">Rio Grande do Sul </option>
                    <option value="(RO)">Rondônia </option>
                    <option value="(RR)">Roraima </option>
                    <option value="(SC)">Santa Catarina </option>
                    <option value="(SP)">São Paulo </option>
                    <option value="(SE)">Sergipe </option>
                    <option value="(TO)">Tocantins </option>
                </select>
                <label>Informo o tipo de moradia:</label>
                <input type="radio" value="Casa" name="radio" /> Casa
                <input type="radio" value="Apartamento" name="radio"/> Apartamento
            </fieldset>
        </>
       
    );
  }
}