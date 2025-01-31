//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var emailId = document.getElementById('emailId').value;

    var message = 'First Name: ' + firstName + '\n' + 
                  'Last Name: ' + lastName + '\n' + 
                  'Phone Number: ' + phoneNumber + '\n' + 
                  'Email ID: ' + emailId;

    alert(message);
});