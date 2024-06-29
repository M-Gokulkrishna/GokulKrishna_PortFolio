const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
// Creating Transport and Set up Service  
const msgTransporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.LOGIN_EMAIL,
        pass: process.env.LOGIN_PASSWORD
    }
});
// Using Middleware
app.use(cors());
app.use(express.json());
// Testing Api uri Route
app.get('/', (request, response) => {
    response.status(200).json({ Message: "Welcome to Portfolio Home Route!" });
});
// Sending Email Api uri Route
app.post('/send-email', (req, res) => {
    const { VisitorName, VisitorEmail, VisitorMessage } = req.body;
    const mailConfigurations = {
        from: VisitorEmail,
        to: process.env.RECEPIENT_EMAIL,
        subject: `Email Sent From ${VisitorName}`,
        text: `Portfolio Message\n
               From: ${VisitorEmail},\n
               To: ${process.env.RECEPIENT_EMAIL}\nMessage: \n\n\t ${VisitorMessage}`
    }
    msgTransporter.sendMail(mailConfigurations, (error, _) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent Successfully!');
    })
})
// Server listening on Port
app.listen(PORT);