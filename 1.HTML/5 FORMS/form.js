// alert("WELCOME")
/*let form = document.getElementById("form");
let gender = document.getElementById("gender");
let Subscribe = document.getElementById("Subscribe ");
let COMMENT = document.getElementById("COMMENT");
let OPTIONS = document.getElementById("OPTIONS");
let RATTING = document.getElementById("RATTING");
let SUBMIT = document.getElementById("SUBMIT");
if(form == " " || gender == " " || Subscribe == " " || COMMENT == " " || OPTIONS == " " || RATTING == " " || SUBMIT == " " )
{
    alert("ALL THE FIELDS ARE MANDITORY")
}*/
// alert("WELCOME");

let form = document.querySelector('.FORM');
let gender = document.querySelector('input[name="GENDER"]:checked');
let subscribe = document.getElementById("subscribe");
let comment = document.getElementById("comment");
let options = document.querySelector('select[name="FAVROITE CRICKETER"]');
let rating = document.getElementById("ratting");

form.addEventListener('submit', function(event) {
    if (!gender || !subscribe.checked || !comment.value || !options.value || !rating.value) {
        alert("ALL THE FIELDS ARE MANDATORY");
        event.preventDefault(); // Prevent form submission if fields are empty
    }
});
