const config = require('../config');

exports.send = async(to, subject, body) => {
    mailOptions = {
        from: 'leolapis6@gmail.com', 
        to: to, 
        subject: subject,
        text: 'Bem Vindo',
        html: body
    };
    config.transporter.sendMail(mailOptions, (error, info) => {});
}






