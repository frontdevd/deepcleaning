const nodemailer = require('nodemailer');

module.exports.login = function (req, res) {
    let service = req.body.service;
    let datepicker = req.body.datepicker;

    let transport = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: '',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const message = {
        from: 'test@tesla.com',
        to: 'test@email.com',
        subject: 'test',
        text: `please send me in ${service} in time: ${datepicker}`
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(info);
        }
    });

    res.status(200).json({ok: 'valid'});
    res.end();

};
