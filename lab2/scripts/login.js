// @ts-check
// Uchwyty
const firstNameInput = document.getElementById('exampleInputFirstName');
const lastNameInput = document.getElementById('exampleInputLastName');
const phoneNumber = document.getElementById('exampleInputPhone');
const login = document.getElementById('exampleInputLogin');
const password1 = document.getElementById('exampleInputPassword1');
const password2 = document.getElementById('exampleInputPassword2');
const email = document.getElementById('exampleInputEmail');
const birthdate = document.getElementById('exampleInputBirthdate');

const firstNameHelp = document.getElementById('firstNameHelp');
const lastNameHelp = document.getElementById('lastNameHelp');
const phoneNumberHelp = document.getElementById('phoneHelp');
const loginHelp = document.getElementById('loginHelp');
const passwordHelp = document.getElementById('passwordHelp');
const emailHelp = document.getElementById('emailHelp');
const okButton = document.getElementById('okButton');
const birthdateHelp = document.getElementById('birthdateHelp');

const regName = /^[A-Z][a-z]/;
const regPhone = /^\+\d{11}$/;
const regLogin = /[a-z]{4,}$/;
const regBirthdate = /^\d{2}\.\d{2}\.\d{4}$/;
let ok = true;

function check()
{
    ok = true;
    if(regName.test(firstNameInput.value))
    {
        firstNameHelp.textContent='';
    }
    else
    {
        ok=false;
        firstNameHelp.style.color = `rgb(255,0,0)`;
        firstNameHelp.textContent='Niepoprawne imię!';
    }
    if(regName.test(lastNameInput.value))
    {
        lastNameHelp.textContent='';
    }
    else
    {
        ok=false;
        lastNameHelp.style.color = `rgb(255,0,0)`;
        lastNameHelp.textContent='Niepoprawne nazwisko!';
    }
    if(regPhone.test(phoneNumber.value))
    {
        phoneNumberHelp.textContent='';
    }
    else
    {
        ok=false;
        phoneNumberHelp.style.color = `rgb(255,0,0)`;
        phoneNumberHelp.textContent='Niepoprawny format numeru! Prawidłowy format międzynarodowym: np. +48123456789';
    }
    if(email.value == '')
    {
        ok=false;
        emailHelp.style.color = `rgb(255,0,0)`;
        emailHelp.textContent = 'Nie możesz zostawić pustego pola adres email!';
    }
    else
    {
        emailHelp.textContent = '';     
    }
    if(regBirthdate.test(birthdate.value))
    {
        birthdateHelp.textContent = ''
    }
    else
    {
        ok=false;
        birthdateHelp.style.color = `rgb(255,0,0)`;
        birthdateHelp.textContent = 'Źle wpisana data urodzenia! Prawidłowy format to np. 12.12.1994'
    }
    if(regLogin.test(login.value))
    {
        loginHelp.textContent='';
    }
    else
    {
        ok=false;
        loginHelp.style.color = `rgb(255,0,0)`;
        loginHelp.textContent='Niepoprawny login! Dozwolone tylko małe literki (minimum 4), bez cyfr!';
    }
    if(password1.value == '' || password2.value == '')
    {
        ok=false;
        passwordHelp.style.color = `rgb(255,0,0)`;
        passwordHelp.textContent = 'Hasło nie może być puste!';
    }
    else if(password1.value != password2.value)
    {
        ok=false;
        passwordHelp.style.color = `rgb(255,0,0)`;
        passwordHelp.textContent = 'Hasła nie są identyczne!';
    }
    else if(password1.value == password2.value)
    {
        passwordHelp.textContent = '';
    }

}

// Klikniecie przycisku 'ok'
okButton.addEventListener('click', function(){
    check();
    if(ok)
    {
        document.getElementById('outputFirstName').textContent = firstNameInput.value;
        document.getElementById('outputLastName').textContent = lastNameInput.value;
        document.getElementById('outputPhone').textContent = phoneNumber.value;
        document.getElementById('outputDay').textContent = birthdate.value.substring(0,2);
        document.getElementById('outputMonth').textContent =  birthdate.value.substring(3,5);
        document.getElementById('outputYear').textContent =  birthdate.value.substring(6,11);
        document.getElementById('outputEmail').textContent = email.value
        document.getElementById('outputLogin').textContent = login.value;
        document.getElementById('outputPassword').textContent = password1.value;
        
    }

})

