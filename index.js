// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// second api endpoint

app.get('/api/:t',function(req, res){
  let time;

  if(req.params.t.toString().trim().length==0){
    time = Date.now();
  }else {
    time =req.params.t;
  }

  if(Date.parse(time)){
      time = Date.parse(time)

    }else {
      if(parseInt(time))
      time = parseInt(time);
     }


      let timeObject;

      if(new Date(time).toString()=="Invalid Date"){
  		timeObject = {error: "Invalid Date"}

  	}else{

    		timeObject = {

        		"unix":new Date(time).valueOf(),
       		 "utc":new Date(time).toUTCString()
    }
  }
res.json(timeObject);
});


app.get("/api",function(req, res){
  let time = Date.now();
  let timeObject = {
    "unix":time,
    "utc":new Date(time).toUTCString()
  }

  res.json(timeObject);

});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
