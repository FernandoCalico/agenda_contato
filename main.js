const form = document.getElementById('form-agenda');
const nomeContato = [];
const telefoneContato = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O nome de contato ${inputNomeContato.value} já foi inserido!`);
    } else {
        if (telefoneContato.includes(inputTelefoneContato.value)) {
            alert(`O número do telefone ${inputTelefoneContato.value} já foi inserido!`)
        } else {    
            nomeContato.push(inputNomeContato.value);
            telefoneContato.push(inputTelefoneContato.value);

            let linha ='<tr>'
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputTelefoneContato.value}</td>`;
            linha += '</tr>'
    
            linhas += linha;
        }
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
