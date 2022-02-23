import React from 'react';

export default class Form extends React.Component {
  render() {
    return(
        <>
        <label>Name:  </label>
        <input type="text" name="name" required placeholder="Informe seu nome" />

        <label>Email:  </label>
        <input type="email" name="email" required placeholder="Informe seu email" />

        <label>CPF:  </label>
        <input type="text" name="cpf" required placeholder="CPF" />

        <label>Cidade:  </label>
        <input type="text" name="cidade" required placeholder="Informa a Cidade" />

        <label>Estado:  </label>
        <select required>
            <option>Acre (AC)</option>
            <option>Alagoas (AL)</option>
            <option>Amapá (AP)</option>
            <option>Amazonas (AM)</option>
            <option>Bahia (BA)</option>
            <option>Ceará (CE)</option>
            <option>Distrito Federal (DF)</option>
            <option>Espírito Santo (ES)</option>
            <option>Goiás (GO)</option>
            <option>Maranhão (MA)</option>
            <option>Mato Grosso (MT)</option>
            <option>Mato Grosso do Sul (MS)</option>
            <option>Minas Gerais (MG)</option>
            <option>Pará (PA)</option>
            <option>Paraíba (PB)</option>
            <option>Paraná (PR)</option>
            <option>Pernambuco (PE)</option>
            <option>Piauí (PI)</option>
            <option>Rio de Janeiro (RJ)</option>
            <option>Rio Grande do Norte (RN)</option>
            <option>Rio Grande do Sul (RS)</option>
            <option>Rondônia (RO)</option>
            <option>Roraima (RR)</option>
            <option>Santa Catarina (SC)</option>
            <option>São Paulo (SP)</option>
            <option>Sergipe (SE)</option>
            <option>Tocantins (TO)</option>
        </select>
        <label>Informo o tipo de moradia:</label>
        <input type="radio" value="Casa" name="radio" /> Casa
        <input type="radio" value="Apartamento" name="radio"/> Apartamento

        </>
       
    );
  }
}