const today = new Date();
let current_day = today.getDate();
let current_month = today.getMonth() + 1;
let current_year = today.getFullYear();
const button = document.getElementById('botao');

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
    console.log(term_day);
    console.log(term_month);
    console.log(term_year);

    document.getElementById('numDate').value = "dd/mm/aaaa";

});


