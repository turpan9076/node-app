const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    var name = req.query.name;
    var mail = req.query.mail;
    var data = {
        title: 'Hello',
        content: 'あなたの名前は、' + name + '。<br>' +
            'メールアドレスは、' + mail + 'です。'
    };
    res.render('hello', data);
});
module.exports = router;