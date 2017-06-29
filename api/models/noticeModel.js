/*
  Definuje databazove schema pro upozorneni (Notice).
  Pro tento ucel je pouzita knihovna mongoose, ktera umi
  pracovat s MongoDB.
*/
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  message: {
    type: String,
    Required: 'Message must be set!'
  },
  order: {
    type: Number,
    Required: 'Order must be set!'
  }
});

module.exports = mongoose.model('Notice', noticeSchema);
