/*
  Vychozi skript ktery je spusten pri provedeni prikazu "npm start".
  Body parser je pomocna knihovna, kterou vyzaduje Express od
  verze 4.x.
*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Notice = require('./api/models/noticeModel');

const app = express();

/* DB init */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/didentDB');

/* Body parser init */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let noticeRoutes = require('./api/routes/noticeRoutes');
noticeRoutes.initNoticeRoutes(app);

app.get('/', function (req, res) {
  res.send('Dident Rest API')
});

/* Start Express: starts a UNIX socket and listens for connections on the given path. */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
