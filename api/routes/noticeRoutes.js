/*
  Zde je definovan routing pro upozorneni (Notice).
  Jedna se o cisty Express
*/
'use strict';
module.exports.initNoticeRoutes = function(app) {
  const noticeList = require('../controllers/noticeController');

  app.route('/notices')
    .get(noticeList.listAllNotices)
    .post(noticeList.createNotice);

  app.route('/notices/:noticeId')
    .put(noticeList.updateNotice)
    .delete(noticeList.deleteNotice);
};
