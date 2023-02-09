var today = new Date();
const current_day = today.getDate();
const current_month = today.getMonth() + 1;
const current_year = today.getFullYear();

const term = document.getElementById('numDate');
const date = new Date(term);
const term_day = date.getDate();
const term_month = date.getMonth() + 1;
const term_year = date.getFullYear();

const year = date.getFullYear();
const button = document.getElementById('botao');

// var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

button.addEventListener('click', function () {
    console.log(term_day);
    console.log(term_month);
    console.log(term_year);
});


