

function validateName()
{
    let nameError = document.getElementById('username-error')
    let name=document.getElementById('name')
      if(name.value.trim() == '')
      {
        nameError.innerHTML='username cannot be blank'
        return false
      }
      else if(name.value.length < 5)
      {
        nameError.innerHTML='username cannot be less than 5 characters  '
       return false
      }
      else{
        nameError.innerHTML = ''
        return true
      }
}
function validateEmail()
{
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if(email.value.trim() == '')
      {
        emailError.innerHTML='Email cannot be blank!'
        return false
      }
      else if(!email.value.match(regEx))
      {
        emailError.innerHTML='Email is not in global format '
       return false
      }
     
      else{
        emailError.innerHTML=''
        return true
      }
}

function validatePassword()
{
    let password=document.getElementById('pass')
    let passwordError=document.getElementById('password-error')
 
      if(password.value.trim() == '')
      {
        passwordError.innerHTML='&nbsp;&nbspPassword cannot be blank'
        return false
      }
      else if (password.value.length < 6 || password.value.length > 20) {

      
        passwordError.innerHTML= '&nbsp;&nbsp;&nbsp;Password cannot be less than 6 or  more than 20 '
        return false
      }
      else{
      passwordError.innerHTML=''
        return true
      }
}
function validateRepeat()
{
    let password=document.getElementById('pass')
    let repeatPassword=document.getElementById('re_pass')
    let repeatError=document.getElementById('repeat-error')

      if(password.value != repeatPassword.value)
      {
        repeatError.innerHTML='Password mismatch'
        return false
      }
     else{
    repeatError.innerHTML=''
        return true
      }
}

function validateForm()
 {
  let submitError=document.getElementById('submit-error')
  if(!validateEmail() || !validateName() || !validatePassword() || !validateRepeat())
   {
    submitError.innerHTML='Please resolve the errors!'
    return false
   } 
   else
   {
    submitError.innerHTML=''
    return true
   }
}
function validateInForm()
 {
  let loginError=document.getElementById('login-error')
  if(!validateEmail() ||  !validatePassword() )
   {
    loginError.innerHTML='Please resolve the errors!'
    return false
   } 
   else
   {
    loginError.innerHTML=''
    return true
   }
}
function validateResetEmail()
{
    let urEmail = document.getElementById('your-email')
    let resetError = document.getElementById('reset-error')
    let regEx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(urEmail.value.trim() == '')
      {
        resetError.innerHTML='Email cannot be blank!'
        return false
      }
      else if(!urEmail.value.match(regEx))
      {
        resetError.innerHTML='Email is not in global format '
       return false
      }
     
      else{
        resetError.innerHTML=''
        return true
      }
}
function resetForm() {
  if (validateResetEmail()) {
      
      alert('Email has been sent to ' + document.getElementById('your-email').value+'   with instructions on resetting your Password.');
      
  }
}

var password = document.getElementById('pass');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);

    // Update the text indicator with smiley
    if (val !== "") {
        var smiley = getSmiley(result.score);
        text.innerHTML = "Strength: " + "<strong>"  + "</strong>" + " " + smiley;
    } else {
        text.innerHTML = "";
    }
});

// Function to get the appropriate smiley based on the password strength score
function getSmiley(score) {
    switch (score) {
        case 0:
            return "<span style='color:red;'>☹ Worst</span>";
            
        case 1:
          return "<span style='color:#FF004D;'>☹ Bad</span>";
        case 2:
          return "<span style='color: #5F0F40;'>☹ Weak</span>";
        case 3:
          return "<span style='color: #280274;'>☺ Good</span>";
        case 4:
          return "<span style='color: green;'>☻ Strong</span>";
        default:
            return "";
    }
}
