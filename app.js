function check_login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
    if (check_digits(username)) {
		notice("username is correct");
	} else {
		notice("Username should contain at least one number");
	}
	
    if (password === "12345678") {
    	notice("password is correct");
	} else {
    	notice("PASSWORD IS INCORRECT");
    }
    if (check_digits(username) && password == "12345678") {
    	document.getElementById("1stxt").innerHTML = "WELCOME!  " + username;
    } else {
    	notice("Try Again");
    }
    
}

function check_digits(digits) {
	if (/\d/.test(digits)) {
		return true;
	} else {
		return false;
	}
}


function notice(message) {
    var errors = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> '+ message +'</div>';
    $('#errors').html(errors);
}
    