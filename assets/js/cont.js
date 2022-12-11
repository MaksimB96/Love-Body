/**
 * Function that allows burger menu to drop down and then close 
 */

function showMenu(){
    document.querySelector('.navigate').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', event => {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    // trim used here to remove any white space an email may have 
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, 'Email is Required');
    } else if {
        setError(email, 'Provide a Valid Email');
    } else {
        setSuccess(email);
    }
}


function isEmailValid (email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setError(element, message){
    const inputControl = element.parentElement;
    const errorShow = inputControl.querySelector('.error');

    errorShow.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

/**
 * This function will allow string values to be sent
 */
function sendMail(){
    let sendInfo = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        message: document.getElementById('txtmsg').value
    };
    const serviceID = 'service_2m35b0r';
    const templateID = 'template_fyhy87s';

    emailjs.send(serviceID, templateID, sendInfo)
    .then(
    res =>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('txtmsg').value = "";
        console.log(res);
        alert('Thanks for the feedback!')
    })
    .catch(err => console.log(err))
    ;
}

