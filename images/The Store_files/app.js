	function check_login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
    if (check_digits(username)) {
		alert("username is correct");
	} else {
		alert("Username should contain at least one number");
	}
	
    if (password === "12345678") {
    	alert("password is correct");
	} else {
    	alert("PASSWORD IS INCORRECT");
    }
    if (check_digits(username) && password == "12345678") {
    	document.getElementById("1stxt").innerHTML = "WELCOME!  " + username;
    } else {
    	alert("Try Again");
    }
    
}
	function check_digits(digits) {
    	if (/\d/.test(digits)) {
    		return true;
    	} else {
    		return false;
    	}
    }