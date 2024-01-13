const button = document.querySelector('.button');
const aeroPlane = document.querySelector('.button__plane-icon-img');
const buttonText = document.querySelector('.button__text');
const buttonTextWrapper = document.querySelector('.button__text-wrapper');
const doneIcon = document.querySelector('.button__done-icon-img');

/* Form handler */
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (event){
    event.preventDefault();
    formSubmit();
});


/* - fields check */
function isRequiredFieldsFilling () {
    const requiredFields = document.querySelectorAll('input[required]');
    let emptyRequiredFieldsCount = 0;
    requiredFields.forEach((element) => {
        element.value === '' ? emptyRequiredFieldsCount++ : false;
    })
    return emptyRequiredFieldsCount === 0;
}
/* - fields check [end] */

/* - submit form */
button.addEventListener('click', event => {
    if (isRequiredFieldsFilling()) {
        formSubmit();
    } else {
        buttonShaking();
    }
})
function formSubmit () {
        button.disabled = true;
        buttonText.classList.add('opacity--zero');
        button.classList.add('button--fix-size');
        aeroPlane.classList.add('plane--rotate');
        console.log('click button');
        setTimeout(buttonAddSendingText, 2000);
        setTimeout(sendFinish, 5000);
        setTimeout(buttonAddSendText, 5000);
        setTimeout(hideDoneIcon, 4000);
}
function buttonAddSendingText () {
    doneIcon.classList.add('opacity--visible');
    buttonText.innerHTML = 'ОТПРАВЛЕНО';
    buttonTextWrapper.classList.add('opacity--visible');
    buttonText.classList.remove('opacity--zero');
    button.classList.add('form--submit');
}
function sendFinish () {
    button.classList.remove('button--fix-size');
    aeroPlane.classList.remove('plane--rotate');
    button.disabled = false;
}
function buttonAddSendText () {
    buttonText.classList.remove('opacity--zero');
    setTimeout(changeText, 1000);
    function changeText () {
        buttonText.innerHTML = 'ОТПРАВИТЬ';
    }
}
function hideDoneIcon () {
    doneIcon.classList.remove('opacity--visible');
    button.classList.remove('form--submit');
}
function buttonShaking () {
    button.classList.add('button--shaking');
    setTimeout(buttonStopShaking, 200);

    function buttonStopShaking () {
        button.classList.remove('button--shaking')
    }
}

/* - submit form [end] */
/* Form handler [end] */

