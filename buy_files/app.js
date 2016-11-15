function check_login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
    if (check_digits(username) && password == "12345678") {
        window.open("/Users/joeyjohnson/Desktop/Exercises/Day19/store/buy.html");
        // document.getElementById("1stxt").innerHTML = "WELCOME!  " + username;
	} else {
		notice("Username or password is incorrect!");
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

function myFunction() {
    document.getElementById("asic_desc").value = document.getElementById("desc").value;
}
    