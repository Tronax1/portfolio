const express = require('express');
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const http = require('http')
require('dotenv').config();

const app = express();

setInterval(()=>{
    http.get("http://jorge-villarreal.herokuapp.com")
}, 300000);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    nodeMailer.createTestAccount((err, account) => {
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
            service: 'gmail',
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

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message url: %s', nodeMailer.getTestMessageUrl(info))
        })
    })
})

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('my-app/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, '0.0.0.0', () => console.log(`Server started running on port ${port}`));