document.getElementById('btnSubmit').addEventListener('click', () => {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;


    const passwordInput = document.getElementById('passwordInput');
    const passwordValue  = passwordInput.value;

    if(emailValue === 'please@login' && passwordValue === 'secret' ){
        console.log('valid user');
    }
    else {
        console.log('invalid user');
    }
})