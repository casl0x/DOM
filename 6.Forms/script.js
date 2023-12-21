

// ajout du prénom
const firstName = document.getElementById('firstname')
const displayFirstName = document.getElementById('display-firstname')
firstName.addEventListener('keyup', function(){
    displayFirstName.textContent = firstName.value;
});

// ajout de l'age + vérification 
const age = document.getElementById('age')
const hardTrustSection = document.getElementById('a-hard-truth')
age.addEventListener('change', function (){
    const ageInput = parseInt(age.value);
    if (ageInput < 18){
        hardTrustSection.style.visibility = 'none';
    } else {
        hardTrustSection.style.visibility = 'visible';
    }
})

// création password + vérification
const password = document.getElementById('pwd')
const confirmPassword = document.getElementById('pwd-confirm')

const validatePassword = () => {
    const passwordInput = password.value;
    const confirmPasswordInput = confirmPassword.value 

    if (passwordInput.length < 6 || passwordInput !== confirmPasswordInput) {
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
    } else {
        password.style.border = '';
        confirmPassword.style.border = ''; 
    }
};

password.addEventListener('keyup', validatePassword);
confirmPassword.addEventListener('keyup', validatePassword);

// darkmode
const selectField = document.getElementById('toggle-darkmode');

selectField.addEventListener('change', function() {
  const selectedTheme = selectField.value;

  if (selectedTheme === 'dark') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
}

function disableDarkMode() {
  document.body.style.backgroundColor = '';
  document.body.style.color = '';
}