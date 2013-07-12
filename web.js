var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

try {
  var data = fs.readFileSync('index.html',"utf8");
} catch (e) {
  // Here you get the error when the file was not found,
  // but you also get any other error
  data=e;
}

//var content = buf.toString("utf8",0,buf.length); 

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
