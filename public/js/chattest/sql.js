var Client = require('mysql').Client;
var client = new Client();
client.user = 'geeks_user';
client.password = 'GLO^0f$Ud$^-H6xca?';
console.log("connecting...");
client.connect(function(err, results) {
    if (err) {
        console.log("ERROR: " + err.message);
        throw err;
    }
    console.log("connected.");
    clientConnected(client);
});
clientConnected = function(client)
{
}