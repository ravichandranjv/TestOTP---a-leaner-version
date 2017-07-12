var mongoose = require('mongoose'),Schema=mongoose.Schema;

var User = new mongoose.Schema({});
User.statics.create = function (params, callback) {
  var user = new User(params);
  user.save(function(err, result) {
    callback(err, result);
  });
  return user;
};
var usermodel=mongoose.model('Model', User);
module.exports = usermodel;