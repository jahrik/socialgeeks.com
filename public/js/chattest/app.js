var mysql = require('mysql').Client;
var sql = new mysql();
sql.user = 'geeks_user';
sql.password = 'Tm17JxkKA69Po2eSnG';

console.log("Connecting to database...");
sql.connect(function(err, results) {
	if (err) { console.log("ERROR: " + err.message); throw err;	}
    console.log("Connected.");
});

sql.query('USE geeks_main', function(err, results) {
	if (err) { console.log("ERROR: " + err.message); throw err;	}
	console.log("Using geeks_main.");
});


var http = require('http'), faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Invalid Request.'); // Handle non-Bayeux requests
  response.end();
});

bayeux.attach(server);
server.listen(8000);

var dispatch = new faye.Client('http://localhost:8000/faye');

///////////////////////////////////////////////////////////////////////////////
// EXTENSIONS /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// LOGGER /////////////////////////////////////////////////////////////////////

var Logger = {
  incoming: function(message, callback) {
    console.log('incoming', message.channel);
	callback(message);
  },
  outgoing: function(message, callback) {
    console.log('outgoing', message.channel);
    callback(message);
  }
};

//bayeux.addExtension(Logger);


// CHANNEL MANAGER ////////////////////////////////////////////////////////////

var chanMgr = {
	incoming: function(message, callback) {
		if (message.channel.indexOf('/meta/') === 0) { return callback(message); } // Leave non-data messages alone

		var type = message.data.type;
		
		switch(type) {
			case 'chatInit':
			
				var to =  message.data.to;
				
				if (to == '') { 
					console.log("Missing 'to'");
					message.data.text = "ERROR: Missing 'to'";
					//throw("Missing To receipient");
					callback(message);  // bad error method
				} else {
					var code = randomString();
					message.data.code = code;
					
					// TODO: check if they are friends
					
					sql.query(
							"SELECT * FROM users WHERE id='" + to + "'",
							function selectCb(err, results, fields) {
								if (err) { console.log("ERROR: " + err.message); throw err;	}
								console.log("Notifying", results[0].username, "( /session/" + results[0].auth + " )", 'of private room...');
								console.log(code);
								dispatch.publish("/session/" + results[0].auth, { code: code });
							});
				}
			
			
				break;
				
			case 'chat':
				console.log( message.channel, message.data.text );
				callback(message);
				break;
		}

		callback(message);  // let dispatch get thru...

	}
};

bayeux.addExtension(chanMgr);


/////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////

function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz-_!~()$@";
	var string_length = 64;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}



