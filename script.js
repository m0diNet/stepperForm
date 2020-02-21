var nEmail = document.getElementById("nextEmail"),
    nPass = document.getElementById('nextPass'),
    bPass = document.getElementById('backPass'),
    nTerms = document.getElementById('nextTerms'),
    bTerms = document.getElementById('backTerms'),
    bSubmit = document.getElementById('backSubmit'),
    sec1 = document.getElementById('section1'),
    sec2 = document.getElementById('section2'),
    sec3 = document.getElementById('section3'),
    sec4 = document.getElementById('section4'),
    varEmail = document.getElementById('email'),
    varPass = document.getElementById('password'),
    varTerms = document.getElementById('terms'),
    varCheck = document.getElementById('checking'),
    badges = document.querySelectorAll('.badge');



// Toggling Display
sec2.classList.toggle("d-none");
sec3.classList.toggle("d-none");
sec4.classList.toggle("d-none");
badges[0].classList.toggle("badge-light");
badges[0].classList.toggle("badge-primary");



// Next Button for email section
nEmail.addEventListener("click", function() {

    if (!validateEmail(varEmail.value)) {
        varEmail.classList.add("border-danger");
    } else {
        // if all is good what to do next
        sec1.classList.toggle('d-none');
        sec2.classList.toggle('d-none');
        badges[0].classList.toggle("badge-light");
        badges[0].classList.toggle("badge-primary");
        badges[1].classList.toggle("badge-light");
        badges[1].classList.toggle("badge-primary");
    }
})

// Back Button for password section
bPass.addEventListener("click", function() {

    sec1.classList.toggle('d-none');
    sec2.classList.toggle('d-none');
    badges[0].classList.toggle("badge-light");
    badges[0].classList.toggle("badge-primary");
    badges[1].classList.toggle("badge-light");
    badges[1].classList.toggle("badge-primary");
})

// Next Button for password section
nPass.addEventListener("click", function() {
    if (varPass.value === null || varPass.value === undefined || varPass.value === '') {
        varPass.classList.add("border-danger");
    } else {
        // if all is good what to do next
        sec2.classList.toggle('d-none');
        sec3.classList.toggle('d-none');
        badges[1].classList.toggle("badge-light");
        badges[1].classList.toggle("badge-primary");
        badges[2].classList.toggle("badge-light");
        badges[2].classList.toggle("badge-primary");
    }
})

// Back Button for terms section
bTerms.addEventListener("click", function() {

    sec2.classList.toggle('d-none');
    sec3.classList.toggle('d-none');
    badges[1].classList.toggle("badge-light");
    badges[1].classList.toggle("badge-primary");
    badges[2].classList.toggle("badge-light");
    badges[2].classList.toggle("badge-primary");
})

// Next Button for terms section
nTerms.addEventListener("click", function() {

    if (!varTerms.checked) {
        varCheck.classList.add('wrong');
    } else {
        // if all is good what to do next
        sec3.classList.toggle('d-none');
        sec4.classList.toggle('d-none');
        badges[2].classList.toggle("badge-light");
        badges[2].classList.toggle("badge-primary");
        badges[3].classList.toggle("badge-light");
        badges[3].classList.toggle("badge-primary");
    }
})

// Back Button for terms section
bSubmit.addEventListener("click", function() {

    sec4.classList.toggle('d-none');
    sec3.classList.toggle('d-none');
    badges[2].classList.toggle("badge-light");
    badges[2].classList.toggle("badge-primary");
    badges[3].classList.toggle("badge-light");
    badges[3].classList.toggle("badge-primary");
})

// check Changing input on Terms
varEmail.addEventListener('change', function() {
    if (!validateEmail(varEmail.value)) {
        varEmail.classList.add("border-danger", "wrong");
    } else {
        varEmail.classList.remove("border-danger", "wrong");
    }
})

// check Changing input on Terms
varPass.addEventListener('change', function() {
    if (varPass.value === null || varPass.value === undefined || varPass.value === '') {
        varPass.classList.add("border-danger", "wrong");
    } else {
        varPass.classList.remove("border-danger", "wrong");
    }
})

// check Changing input on Terms
varTerms.addEventListener('change', function() {
    if (this.checked) {
        varCheck.classList.remove("wrong");
    } else {
        varCheck.classList.add("wrong");
    }
})





// Validating email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}