/*
  Zde jsou definovany operace nad "tabukou" upozorneni (Notice).
  Je zde pouzit mongoose
*/
'use strict';
const mongoose = require('mongoose');
const Notice = mongoose.model('Notice');

exports.listAllNotices = function(req, res) {
  Notice.find({}, function(err, notice) {
    if (err) {
      res.send(err);
    } else {
      res.json(notice);
    }
  });
};

exports.createNotice = function(req, res) {
  let newNotice = new Notice(req.body);
  newNotice.save(function(err, notice) {
    if (err) {
      res.send(err);
    } else {
      res.json(notice);
    }
  });
};

exports.updateNotice = function(req, res) {
  Notice.findOneAndUpdate({_id: req.params.noticeId}, req.body, {new: true}, function(err, notice) {
    if (err) {
      res.send(err);
    } else {
      res.json(notice);
    }
  });
};

exports.deleteNotice = function(req, res) {
  Notice.remove({_id: req.params.noticeId}, function(err, notice) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Notice successfully deleted' });
    }
  });
};
