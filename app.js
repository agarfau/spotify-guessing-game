/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

var express = require('express'); // Express web server framework
var favicon = require('serve-favicon');
var app = express();

app.use('/',express.static(__dirname + '/'));
app.use('/public',express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/favicon.ico'));
//console.log('Listening on 8443');
//app.listen(8443);

module.exports = app;