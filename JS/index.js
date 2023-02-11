// pegando ano atual do pc
let today = new Date();
let current_day = today.getDate();
let current_month = today.getMonth() + 1;
let current_year = today.getFullYear();

const button = document.getElementById('botao');

// lendo e armazenando os fieldsets e as divs de conteudo
const field_np = document.getElementById('fieldset_noPrazo');
const field_at = document.getElementById('fieldset_atrasado');
const field_cp = document.getElementById('fieldset_completo');
const div = document.createElement('div');

//  criando elementos do conteudo

const tarefa = document.createElement('h3');


button.addEventListener('click', function () {

    let term = document.getElementById('numDate').value;
    let date = new Date(term);
    let term_day = date.getDate() + 1;
    let term_month = date.getMonth() + 1;
    let term_year = date.getFullYear();

    if (term_day == 31) { // mes terminado em dia 30
        if (term_month == 4 || term_month == 6 || term_month == 9 || term_month == 11) {
            term_day = 1;
            term_month++;
        }
    }
    if (term_day == 32) {  // mes terminado em dia 31
        if (term_month == 1 || term_month == 3 || term_month == 5 || term_month == 7 || term_month == 8 || term_month == 10 || term_month == 12) {
            term_day = 1;
            term_month++;
        }
    }
    // mes de fevereiro
    if (term_month == 2) {
        if (term_day == 29) {
            term_day = 1;
            term_month++;
        }
    }
    if (term_month > 12) { // alterar ano
        term_month = 1;
        term_year++;
    }

    document.getElementById('numDate').value = "dd/mm/aaaa";

    const nome_tarefa = document.getElementById('txtTaf').value;


    if (current_year > term_year) { // current -> referente ao dia, mes e ano atual, term -> referente ao prazo digitado(dia, mes e)
        field_at.appendChild(div);
        div.classList.add('conteudo');

        div.appendChild(tarefa);
        tarefa.classList.add("pagCont");
        tarefa.innerHTML = nome_tarefa;


    } else if (current_month > term_month) {
        console.log("mes atrasado");
    } else if (current_day > term_day) {
        console.log("dia atrasado");
    }
});


