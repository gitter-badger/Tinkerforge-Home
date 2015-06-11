'use strict';

var _ = require('lodash');
var Bricklet = require('./bricklet.model');

// Get list of bricklets
exports.index = function(req, res) {
  Bricklet.find(function (err, bricklets) {
    if(err) { return handleError(res, err); }
    return res.json(200, bricklets);
  });
};

// Get a single bricklet
exports.show = function(req, res) {
  Bricklet.findById(req.params.id, function (err, bricklet) {
    if(err) { return handleError(res, err); }
    if(!bricklet) { return res.send(404); }
    return res.json(bricklet);
  });
};

// Creates a new bricklet in the DB.
exports.create = function(req, res) {
  Bricklet.create(req.body, function(err, bricklet) {
    if(err) { return handleError(res, err); }
    return res.json(201, bricklet);
  });
};

// Updates an existing bricklet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bricklet.findById(req.params.id, function (err, bricklet) {
    if (err) { return handleError(res, err); }
    if(!bricklet) { return res.send(404); }
    var updated = _.merge(bricklet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bricklet);
    });
  });
};

// Deletes a bricklet from the DB.
exports.destroy = function(req, res) {
  Bricklet.findById(req.params.id, function (err, bricklet) {
    if(err) { return handleError(res, err); }
    if(!bricklet) { return res.send(404); }
    bricklet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}