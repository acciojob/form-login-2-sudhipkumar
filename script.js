//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit',function(event)){
	event.preventDefault();

	var firstName=document.getElementById('firstName').value;

	var message = 'First Name: ' + firstName;

	alert(message);
}