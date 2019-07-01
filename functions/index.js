const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
let  gmailEmail = "mail.jobsutra@gmail.com";
let  gmailPassword = "Sutra@2019";
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== "POST") {
            return;
        }

        const mailOptions = {
            from: req.body.name,
            replyTo: req.body.email,
            to: gmailEmail,
            subject: `from  ${req.body.email} ${req.body.name}`,
            text: req.body.message,
            html: `<p>${req.body.message}`
        };

        mailTransport.sendMail(mailOptions);

        res.status(200).end();
        // or you can pass data to indicate success.
        // res.status(200).send({isEmailSend: true});
    });
});