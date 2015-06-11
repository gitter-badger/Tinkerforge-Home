/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bricklet = require('./bricklet.model');

exports.register = function(socket) {
  Bricklet.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Bricklet.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bricklet:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bricklet:remove', doc);
}