document.addEventListener('DOMContentLoaded', function () {
    // Check if we are on the index.html page
    const getStartedButton = document.getElementById('ord');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('contact');
    if (uploadButton) {
        uploadButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = 'index.html'; // Navigate to the sign-up page
        });
    }
});

const forgotPasswordLink = document.getElementById('fg');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.alert("Password reset option sent to email if user is already logged before");
    });
}
