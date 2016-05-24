console.log("loaded");

var express = require('express');
var router = express.Router();

var Job = require('../../models/job');

// Get
router.get('/', function(req, res){
  Job.find({}, function(err, dbJobs){
    res.json({ jobs: dbJobs})
  });
});

// Show One Job
router.get('/:id', function(req, res){
  Job.findById( req.params.id, function( err, dbJob){
    res.json( dbJob );
  });
});

// Update Job
router.put('/:id', function(req, res){

  var id = req.params.id;
  Job.findByIdAndUpdate(id, req.body.job , function(err, job) {
    res.json(req.body.job);
  });

});

// Job
router.post('/', function(req, res){
  console.log(req.body)
  Job.create(req.body.job, function(err, job){
    res.json(job);
  });
});

// Delete
router.delete('/:id', function(req, res) {
  console.log('deleting job!');
  Job.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});

module.exports = router;
