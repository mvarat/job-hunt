var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  url: { type: String, required: true },
  applied: { type: Boolean, default: false  },
  interview: { type: Boolean, default: false  },
}, {timestamps: true });


module.exports = mongoose.model('Job', jobSchema);
