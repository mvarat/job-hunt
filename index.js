var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(express.static('./client'));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/jobs_api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var jobsRouter = require('./server/routes/api/jobs');

app.use('/', indexRouter);
app.use('/api/jobs', jobsRouter);

app.listen(8080, function(){
  console.log("tune into port 8080");
});
