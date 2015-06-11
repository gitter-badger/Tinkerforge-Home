'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrickletSchema = new Schema({
  name: String,
  host: String,
  uid: String,
  deviceidentifier: Number,
  frontend: {
  	port: Number
  },
  backend: {
  	logging: {type: Boolean, default: false},
  	threshold : {
  		option: {type: String, default: 'x'},
  		min: Number,
  		max: Number
  	},
  	port: Number
  }
});

module.exports = mongoose.model('Bricklet', BrickletSchema);