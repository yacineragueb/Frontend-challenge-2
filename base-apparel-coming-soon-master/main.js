var form = document.querySelector('form');
var label = document.querySelector('label');
var pErr = document.querySelector(".pErr");
var iconErr = document.querySelector('.iconErr');
var input = document.querySelector('input');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value === '') {
        setInvalidInput('empty');
    } else if(!emailPattern.test(input.value)) {
        setInvalidInput('invalid');
    } else {
        setValidInput();
        alert("The email has been sent successfully! ✅");
        form.submit();
    }
})

input.addEventListener('input', () => {
    if (emailPattern.test(input.value)) {
        setValidInput();
    }
});

function setInvalidInput(type) {
    
    const errorType = {
        empty: 'Please enter your email.',
        invalid: 'Please provide a valid email.'
    }

    label.classList.remove('border', 'border-desaturated-red');
    label.classList.add('border-2', 'border-[hsl(0,93%,68%)]');
    iconErr.classList.remove("hidden");
    pErr.textContent = errorType[type];
    pErr.classList.remove("hidden");
}

function setValidInput() {
    label.classList.add('border', 'border-desaturated-red');
    label.classList.remove('border-2', 'border-[hsl(0,93%,68%)]');
    iconErr.classList.add("hidden");
    pErr.classList.add("hidden");
}