export default {
    login: function (username, password, callback) {
	if (localStorage.token) {
	    if (callback) callback(true);
	    return 
	}
	this.getToken(username, password, (response) => {
	    if (response.authenticated) {
		localStorage.token = response.token
		if (callback) callback(true);
	    } else {
		if (callback) callback(false);
	    }
	});

    },

    logout: function () {
	delete localStorage.token
    },

    loggedIn: function () {
	return !!localStorage.token
    },

    getToken (username, password, callback) {
	$.ajax({
	    type: 'POST',
	    url: '/obtain-auth-token/',
	    data: {
		username: username,
		password: password
	    },
	    success: function(response) {
		callback({
		    authenticated: true,
		    token: response.token
		})
	    }
	});
    },
}
