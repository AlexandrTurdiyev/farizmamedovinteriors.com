const button = document.querySelector('.button');
const aeroPlane = document.querySelector('.button__plane-icon-img');
const buttonText = document.querySelector('.button__text');
const buttonTextWrapper = document.querySelector('.button__text-wrapper');
const doneIcon = document.querySelector('.button__done-icon-img');

button.addEventListener('click', function (event) {
    button.disabled = true;
    buttonText.classList.add('opacity--zero');
    button.classList.add('button--fix-size');
    aeroPlane.classList.add('plane--rotate');
    console.log('click button');
    function sendFinish () {
        button.classList.remove('button--fix-size');
        aeroPlane.classList.remove('plane--rotate');
        button.disabled = false;
    }
    setTimeout(buttonAddSendingText, 2000);
    setTimeout(sendFinish, 5000);
    setTimeout(buttonAddSendText, 5000);
    setTimeout(hideDoneIcon, 4000);

    function buttonAddSendText () {

        buttonText.classList.remove('opacity--zero');
        setTimeout(changeText, 1000);
        function changeText () {
            buttonText.innerHTML = 'ОТПРАВИТЬ';

        }
    }

    function buttonAddSendingText () {
        doneIcon.classList.add('opacity--visible');
        buttonText.innerHTML = 'ОТПРАВЛЕНО';
        buttonTextWrapper.classList.add('opacity--visible');
        buttonText.classList.remove('opacity--zero');
    }

    function hideDoneIcon () {
        doneIcon.classList.remove('opacity--visible');
    }
})
