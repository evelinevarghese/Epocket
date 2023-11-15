// Render Recaptcha Verifier
render();

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// Function to send OTP
function sendOTP() {
    var phoneNumber = document.getElementById('phoneNumber').value;

    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            console.log('OTP Sent');
        })
        .catch(function (error) {
            console.error('Error sending OTP:', error);
            alert(error.message);
        });
}


// Function to verify OTP
function verifyOTP() {
    var verificationCode = document.getElementById('verificationCode').value;

    confirmationResult.confirm(verificationCode)
        .then(function (result) {
            console.log('Phone Number Verified');
            showHomePage();
        })
        .catch(function (error) {
            console.error('Error verifying OTP:', error);
            alert('Incorrect OTP. Please try again.');
            showHomePage(); // Temporarily navigate to the home page for demonstration purposes
        });
}

// Function to show the home page
function showHomePage() {
    
        // Redirect to the home.html page
        window.location.href = 'home.html';
   
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('home-container').style.display = 'block';
}

// Firebase authentication state change listener
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('User is signed in:', user);
        // You can perform additional actions when the user is signed in
    } else {
        console.log('User is signed out');
        // You can perform additional actions when the user is signed out
    }
    // Function to show the home page


});
