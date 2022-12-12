/**
 * Function that allows burger menu to drop down and then close 
 */

function showMenu(){
    document.querySelector('.navigate').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');

function validName(){
    let validateName = document.getElementById('contact-name').value;

    if(validateName == 0){
        nameError.innerHTML = 'Name Required';
        return false;
    }
    if(!validateName.match(/^[A-Za-z]*\s{2}[A-Za-z]*$/)){
        nameError.innerHTML = 'Full Name Required';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validEmail(){
    let validateEmail = document.getElementById('contact-email').value;

    if(validateEmail == 0){
        emailError.innerHTML = 'Email Required';
        return false;
    }
    if (!validateEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2, 4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

/**
 * This function will allow string values to be sent see read me for more info
 */
// function sendMail(){
//     let sendInfo = {
//         name: document.getElementById('name').value ,
//         email: document.getElementById('email').value ,
//         message: document.getElementById('txtmsg').value
//     };
//     const serviceID = 'service_2m35b0r';
//     const templateID = 'template_fyhy87s';

//     emailjs.send(serviceID, templateID, sendInfo)
//     .then(
//     res =>{
//         document.getElementById('name').value = "";
//         document.getElementById('email').value = "";
//         document.getElementById('txtmsg').value = "";
//         console.log(res);
//         alert('Thanks for the feedback!')
//     })
//     .catch(err => console.log(err))
//     ;
// }

