const nodemailer = require("nodemailer");

config_mail =  {
    host: "**********",
    port:587,
    secure:false,
    tls: {
        rejectUnauthorized:false
    },
    auth: {
        user:"*********",
        pass:"*********"
    },
}

transporter = new nodemailer.createTransport( config_mail );

module.exports = {
    gonder: function( bakiye ){
        mail_bilgisi = {
            from: config_mail.auth.user,
            to: "***********",
            subject:"İşlem bekliyor",
            text: "İşlem bitti bakiye: "+bakiye
        }
        transporter.sendMail( mail_bilgisi, (err, res) => {
            console.log( err );
            console.log( res );
        });
    }
}



