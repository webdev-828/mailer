var express = require('express');
var sgMail = require('@sendgrid/mail');
var router = express.Router();
var Mail = require('./../model/mail');

router.get('/', function(req, res, next) {
    Mail.find({}, function (err, mailers) {
        if (err) {
            return res.status(500).json({messages: 'Get Mailers Error', error: err})
        }
        // res.status(200).json({ mailers });
        res.render('mailers', {mailers: mailers})
    })
});

router.post('/contact', function(req, res, next) {
    const msg = {
        to: 'jame.bond0523@gmail.com',
        from: req.body.mail.email,
        subject: 'Contact US',
        text: req.body.mail.message
    };
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    sgMail
    .send(msg)
    .then(() => {
        var newMail = new Mail({
            sender_name: req.body.mail.name,
            email: req.body.mail.email,
            phone: req.body.mail.number,
            message: req.body.mail.message
        });
    
        newMail.save(function(err) {
            if (err) {
                return res.status(500).json({ message: 'Add Mail Error', error: err });
            }
            res.status(200).json({ message: 'Mail saved successfully!' });
        })
    }, console.error);
});

module.exports = router;
