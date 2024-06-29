const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
// 
const msgTransporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.LOGIN_EMAIL,
        pass: process.env.LOGIN_PASSWORD
    }
});
// 
app.use(cors());
app.use(express.json());
// 
app.get('/', (request, response)=>{
    response.status(200).json({Message: "Welcome to Portfolio Home Route!"});
});
// 
app.post('/send-email', (req, res) => {
    const { VisitorName, VisitorEmail, VisitorMessage}  = req.body;
    const mailConfigurations = {
        from: VisitorEmail,
        to: process.env.RECEPIENT_EMAIL,
        subject: `Email Sent From ${VisitorName}`,
        text: `Portfolio Message\nFrom: ${VisitorEmail},\nTo: ${process.env.RECEPIENT_EMAIL}\n Message: \n\t ${VisitorMessage}`
    }
    msgTransporter.sendMail(mailConfigurations, (error, _) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent Successfully!');
    })
})
// 
app.listen(PORT);