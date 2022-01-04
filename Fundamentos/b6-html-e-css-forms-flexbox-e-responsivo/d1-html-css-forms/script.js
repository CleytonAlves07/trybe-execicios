let selectState = document.getElementById('state');
function addState(){
    let states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
    
    for(let i=0; i< states.length; i += 1){
        let option = document.createElement('option');
        option.innerText = states[i];
        option.value = states[i];
        selectState.appendChild(option);
    }
}
window.onload = addState();

