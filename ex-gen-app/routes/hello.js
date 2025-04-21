const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    var name = req.query.name;
    var mail = req.query.mail;
    var data = {
        title: 'Hello!',
        content: '※何か書いて送信してください。'
    };
    res.render('hello', data);
});
router.post('/post', (req, res, next) => {
    var msg = req.body['message'];
    var data = {
        title: 'Hello!',
        content: 'あなたは、「' + msg + '」と送信しました。'
    };
    res.render('hello', data);
})
module.exports = router;