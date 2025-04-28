const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('mydb.db');

router.get('/', (req, res, next) => {
    db.serialize(() => {
        var rows = "";
        db.each("select * from mydata", (err, row) => {
            if(!err){
                rows += "<tr><th>" + row.id + "</th><td>" + row.name + "</td></tr>";
            }
        }, (err, count) => {
            if(!err){
                var data = {
                    title: "Hello!",
                    content: rows
                };
                res.render('sql', data)
            }
        });
    });
});

router.get('/add', (req, res, next) => {
    var data = {
        title: 'Hello/Add',
        content: '新しいレコードを入力：'
    }
    res.render('hello/add',data);
});
router.post('/add', (req, res, next) => {
    const nm = req.body.name;
    const ml = req.body.mail;
    const ag = req.body.age;
    db.serialize(() => {
        db.run('insert into mydata (name, mail, age) values (?, ?, ?)', nm, ml, ag);
    });
    res.redirect('/hello');
});

module.exports = router;