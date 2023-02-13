
let today = new Date();
let current_day = today.getDate();
let current_month = today.getMonth() + 1;
let current_year = today.getFullYear();

const button = document.getElementById('botao');

const text = document.querySelector('#text');
const text2 = document.querySelector('#text2');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');

const field_np = document.getElementById('fieldset_noPrazo');
const field_at = document.getElementById('fieldset_atrasado');
const field_cp = document.getElementById('fieldset_completo');
const div = document.createElement('div');

const tarefa = document.createElement('h3');
spfin = document.getElementsByTagName('span');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.class = 'mycheckbox';
container1.appendChild(checkbox);

const checkboxContainer = document.createElement('div');
checkboxContainer.appendChild(checkbox);
container1.appendChild(checkboxContainer);

const checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
checkbox2.class = 'mycheckbox2';
container2.appendChild(checkbox2);

const checkboxContainer2 = document.createElement('div');
checkboxContainer2.appendChild(checkbox2);
container2.appendChild(checkboxContainer2);

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
    const Editar = document.querySelector('.botao2');
    const contAtra = document.getElementById('conteudoAtra');
    const contProz = document.getElementById('conteudoPraz');
    const conteudoComp = document.getElementById('conteudoCompl');


    if (current_year > term_year) { // current -> referente ao dia, mes e ano atual, term -> referente ao prazo digitado(dia, mes e)
        field_at.appendChild(div);
        div.setAttribute('id', 'conteudoAtra')

        div.appendChild(tarefa);
        tarefa.classList.add("pagCont");
        tarefa.innerHTML = nome_tarefa;
        const br = document.createElement('br');
        div.appendChild(br);

        const input = document.createElement('input');
        input.type = 'date';
        input.setAttribute('class', 'date2');
        div.appendChild(input);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        div.appendChild(checkbox);
        checkbox.classList.add('checkbox');

        spfin = document.createElement('span');
        div.appendChild(spfin);
        texto = document.createTextNode('Finalizado');
        spfin.appendChild(texto);
        spfin.classList.add('finalizado');

    } else if (current_month > term_month) {

        field_at.appendChild(div);
        div.setAttribute('id', 'conteudoAtra')

        div.appendChild(tarefa);
        tarefa.classList.add("pagCont");
        tarefa.innerHTML = nome_tarefa;
        const br = document.createElement('br');
        div.appendChild(br);

        const input = document.createElement('input');
        input.type = 'date';
        input.setAttribute('class', 'date2');
        div.appendChild(input);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        div.appendChild(checkbox);
        checkbox.classList.add('checkbox');

        spfin = document.createElement('span');
        div.appendChild(spfin);
        texto = document.createTextNode('Finalizado');
        spfin.appendChild(texto);
        spfin.classList.add('finalizado');

    } else if (current_month == term_month) {
        if (current_day > term_day) {
            field_at.appendChild(div);
            div.setAttribute('id', 'conteudoAtra')

            div.appendChild(tarefa);
            tarefa.classList.add("pagCont");
            tarefa.innerHTML = nome_tarefa;
            const br = document.createElement('br');
            div.appendChild(br);

            const input = document.createElement('input');
            input.type = 'date';
            input.setAttribute('class', 'date2');
            div.appendChild(input);

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            div.appendChild(checkbox);
            checkbox.classList.add('checkbox');

            spfin = document.createElement('span');
            div.appendChild(spfin);
            texto = document.createTextNode('Finalizado');
            spfin.appendChild(texto);
            spfin.classList.add('finalizado');
            console.log('abc');
        } else {
            field_np.appendChild(div);
            div.setAttribute('id', 'conteudoPraz')

            div.appendChild(tarefa);
            tarefa.classList.add("pagCont");
            tarefa.innerHTML = nome_tarefa;
            const br = document.createElement('br');
            div.appendChild(br);

            const input = document.createElement('input');
            input.type = 'date';
            input.setAttribute('class', 'date2');
            div.appendChild(input);

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            div.appendChild(checkbox);
            checkbox.classList.add('checkbox');

            spfin = document.createElement('span');
            div.appendChild(spfin);
            texto = document.createTextNode('Finalizado');
            spfin.appendChild(texto);
            spfin.classList.add('finalizado');
        }
    }
});

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        container3.appendChild(checkboxContainer);
        container3.appendChild(text);
    }
    else {
        container1.appendChild(checkboxContainer);
        container1.appendChild(text);
    }
});

checkbox2.addEventListener('change', function () {
    if (checkbox2.checked) {
        container3.appendChild(checkboxContainer2);
        container3.appendChild(text2);
    }
    else {
        container2.appendChild(checkboxContainer2);
        container2.appendChild(text2);
    }
});



