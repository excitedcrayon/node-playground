const mail = require('nodemailer');

// create Object for MTA
const MTA = {
    service: 'gmail',
    auth: {
        user: 'email@domain',
        pass: 'emailPassword'
    }
};

// create Object for Mail Headers
const mailHeaders = {
    from: MTA.auth.user,
    to: 'recipient@domain',
    subject: 'Sending Test Mail from NodeJS',
    text: 'Hello World Mail'
};

const transporter = mail.createTransport(MTA);
transporter.sendMail(mailHeaders, (err, info) => {
    if(err){
        console.log(`Fatal error while trying to send mail: ${err}`);
    }else{
        console.log(`Email sent to: ${mailHeaders.to}. ${info.response}`);
    }
});