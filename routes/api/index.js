const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer')
require('dotenv').config();

router.post('/form', async (req, res) => {
    const htmlEmail = `
            <h2>Subject: ${req.body.subject}</h2>
            <h3>Contact Details</h3>
            <ul>
                <li> Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `
    let transporter = nodeMailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    let mailOptions = {
        from: process.env.USER,
        to: process.env.MYEMAIL,
        replyTo: process.env.USER,
        subject: req.body.subject,
        text: req.body.message,
        html: htmlEmail
    }
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.message)
    console.log('Message url: %s', nodeMailer.getTestMessageUrl(info))
})

module.exports = router;