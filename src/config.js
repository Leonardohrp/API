const nodemailer = require('nodemailer');
global.SALT_KEY = 'JW26h@a-i%*Ok19-HJkDVxxy-@!z#%X6%'
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo ao TCC!';

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'leolapis6@gmail.com',
        pass: 'lhrp123456'
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {
    connectionString: 'mongodb://localhost:27017/tcc',
    transporter
}