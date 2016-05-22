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
  Job.findById( req.params.id, function( err, dbJobs){
    res.json( dbJob );
  });
});

// Edit Job
router.put('/:id', function(req, res){
  Job.findById( req.params.id, function( err, job){
    if (err){
      res.send(err);
    }
    job.company = req.body.company;
    job.position = req.body.position;
    job.url = req.body.url;
    job.applied = req.body.applied;
    job.interview = req.body.interview;
    job.save(function(err){
      if (err){
        res.send(err);
      }
      res.json({ message: 'JOb updated!' });
    })
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
