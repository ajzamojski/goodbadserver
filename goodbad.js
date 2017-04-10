var http = require("http");

// Here we define a port to listen to
var PORT1 = 7000;
var PORT2 = 7050;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You're the best: " + request.url);
}

function handleRequest2(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You're the worst: " + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Here we start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT1);
  console.log("You're the best");

});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);
  console.log("You're the worst");

});