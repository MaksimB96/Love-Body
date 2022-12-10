/**
 * Function that allows burger menu to drop down and then close 
 */

function showMenu(){
    

    document.querySelector('.navigate').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}