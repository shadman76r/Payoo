// login-btn

document.getElementById('login-btn').addEventListener('click', function(event){
    // prevent loding this preventDefault is must needed
    event.preventDefault();
    const mobileNumber = 1234567890
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById('mobile-number').value;

    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberVAlue = document.getElementById('pin-number').value;
    const pinNumberVAlueConverted = parseInt(pinNumberVAlue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberVAlueConverted===pinNumber){

        // navigation the pages
       window.location.href='../main.html'
    }
    else{
        // alert
        alert('Invalid credentials');
    }

})