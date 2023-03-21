const express = require("express");
const QuoteList = require('inspirational-quotes/data/data.json');
const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
 


app.get("/", function(req, res) {
  var ran = Math.floor(Math.random()*QuoteList.length);
  const Quote  =  QuoteList[ran];
  res.send(Quote);
});
console.log()

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});