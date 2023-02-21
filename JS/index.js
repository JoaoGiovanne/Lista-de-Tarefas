// pegando ano atual do pc
let today = new Date();
let current_day = today.getDate();
let current_month = today.getMonth() + 1;
let current_year = today.getFullYear();

const button = document.getElementById('botao');

const field_np = document.getElementById('fieldset_noPrazo');
const field_at = document.getElementById('fieldset_atrasado');
const field_cp = document.getElementById('fieldset_completo');
const div = document.createElement('div');
const div2 = document.createElement('div');
const input_date = document.getElementById('numDate');

//  criando elementos do conteudo

spfin = document.getElementsByTagName('span');

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

    const nome_tarefa = document.getElementById('txtTaf');
    const name_trf = nome_tarefa.value;
    document.getElementById('txtTaf').value = '';

    function InputNP() {
        const newinput = document.createElement('input');
        newinput.type = 'date';
        newinput.value = input_date.value;
        newinput.setAttribute('class', 'date2');
        newinput.setAttribute('readonly', true);
        div2.appendChild(newinput);
        input_date.value = '';
    }
    function InputAT() {
        const newinput = document.createElement('input');
        newinput.type = 'date';
        newinput.value = input_date.value;
        newinput.setAttribute('class', 'date2');
        newinput.setAttribute('readonly', true);
        div.appendChild(newinput);
        input_date.value = '';
    }

    if (current_year > term_year) { // current -> referente ao dia, mes e ano atual, term -> referente ao prazo digitado(dia, mes e)
        if (name_trf.trim() === '') {
            alert('Digite o nome da tarefa !!!');
        } else {

            field_at.appendChild(div);
            div.setAttribute('id', 'conteudoAtra')

            const newh3 = document.createElement('h3');
            newh3.classList.add('pagCont');
            const newcontent = document.createTextNode(name_trf);
            newh3.appendChild(newcontent);
            div.appendChild(newh3);

            const br = document.createElement('br');
            div.appendChild(br);

            InputAT();

            const checkbox2 = document.createElement('input');
            checkbox2.type = 'checkbox';
            checkbox2.class = 'checkbox';
            container2.appendChild(checkbox2);

            spfin = document.createElement('span');
            div.appendChild(spfin);
            texto = document.createTextNode('Finalizado');
            spfin.appendChild(texto);
            spfin.classList.add('finalizado');
        }
    } else if (current_month > term_month) {
        if (name_trf.trim() === '') {
            alert('Digite o nome da tarefa !!!');
        } else {

            field_at.appendChild(div);
            div.setAttribute('id', 'conteudoAtra')

            const newh3 = document.createElement('h3');
            newh3.classList.add('pagCont');
            const newcontent = document.createTextNode(name_trf);
            newh3.appendChild(newcontent);
            div.appendChild(newh3);

            const br = document.createElement('br');
            div.appendChild(br);

            InputAT();

            const checkbox2 = document.createElement('input');
            checkbox2.type = 'checkbox';
            checkbox2.class = 'checkbox';
            container2.appendChild(checkbox2);

            spfin = document.createElement('span');
            div.appendChild(spfin);
            texto = document.createTextNode('Finalizado');
            spfin.appendChild(texto);
            spfin.classList.add('finalizado');
        }
    } else if (current_month == term_month) {
        if (current_day > term_day) {
            if (name_trf.trim() === '') {
                alert('Digite o nome da tarefa !!!');
            } else {
                field_at.appendChild(div);
                div.setAttribute('id', 'conteudoAtra')

                const newh3 = document.createElement('h3');
                newh3.classList.add('pagCont');
                const newcontent = document.createTextNode(name_trf);
                newh3.appendChild(newcontent);
                div.appendChild(newh3);

                const br = document.createElement('br');
                div.appendChild(br);

                InputAT();

                const checkbox2 = document.createElement('input');
                checkbox2.type = 'checkbox';
                checkbox2.class = 'checkbox';
                container2.appendChild(checkbox2);

                spfin = document.createElement('span');
                div.appendChild(spfin);
                texto = document.createTextNode('Finalizado');
                spfin.appendChild(texto);
                spfin.classList.add('finalizado');
            }
        } else {
            if (name_trf.trim() === '') {
                alert('Digite o nome da tarefa !!!');
            } else {
                field_np.appendChild(div2);
                div2.setAttribute('id', 'conteudoPraz');

                const newh3 = document.createElement('h3');
                newh3.classList.add('pagCont');
                const newcontent = document.createTextNode(name_trf);
                newh3.appendChild(newcontent);
                div2.appendChild(newh3);

                const br = document.createElement('br');
                div2.appendChild(br);

                InputNP();

                const checkbox = document.createElement('input');

                checkbox.type = 'checkbox';
                checkbox.class = 'checkbox';
                container.appendChild(checkbox);
                checkbox.setAttribute('type', 'checkbox');
                div2.appendChild(checkbox);
                checkbox.classList.add('checkbox');

                spfin = document.createElement('span');
                div2.appendChild(spfin);
                texto = document.createTextNode('Finalizado');
                spfin.appendChild(texto);
                spfin.classList.add('finalizado');

            }
        }
    } else {
        if (name_trf.trim() === '') {
            alert('Digite o nome da tarefa !!!');
        } else {
            field_np.appendChild(div2);
            div2.setAttribute('id', 'conteudoPraz');

            const newh3 = document.createElement('h3');
            newh3.classList.add('pagCont');
            const newcontent = document.createTextNode(name_trf);
            newh3.appendChild(newcontent);
            div2.appendChild(newh3);

            const br = document.createElement('br');
            div2.appendChild(br);

            InputNP();

            const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
            checkbox.class = 'checkbox';
            container.appendChild(checkbox);

            checkbox.setAttribute('type', 'checkbox');
            div2.appendChild(checkbox);
            checkbox.classList.add('checkbox');

            spfin = document.createElement('span');
            div2.appendChild(spfin);
            texto = document.createTextNode('Finalizado');
            spfin.appendChild(texto);
            spfin.classList.add('finalizado');
        }
    }
});

