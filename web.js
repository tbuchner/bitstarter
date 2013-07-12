var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
//var buf = new buffer(100); 

//buf = fs.readFileSync('index.html');

var data = "Test";

//fs.readFileSync('index.html', function (err, data) {
//  if (err) throw err;
//  console.log(data);
//});


//var content = buf.toString("utf8",0,buf.length); 

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
