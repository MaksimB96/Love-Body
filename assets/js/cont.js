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
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, 'Email is Required')
    }
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

