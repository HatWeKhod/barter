var mongoose = require('mongoose');

// Facebook User Schema to keep track of fbId and name
var facebookUserSchema = new mongoose.Schema({
  'fbId': String,
  'name': String,
  'email':String,
  'login_type':String,
  'password':String,
  'token':String,
  'created_at': String,
  'barter_score':  { 'type': Number, 'default': 0 },
    'people_rate_count':  { 'type': Number, 'default': 0 },
});

var FbUsers = mongoose.model('fbs', facebookUserSchema);

module.exports = {
  FbUsers: FbUsers,
  facebookUserSchema: facebookUserSchema
};
