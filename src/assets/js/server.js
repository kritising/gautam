const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const EMAIL_SERVICE = 'tokritikumari@gmail.com'; // e.g., Gmail, Outlook, etc.
const EMAIL_USER = 'tokritikumari@gmail.com';
const EMAIL_PASSWORD = 'Kriti123';

const transporter = nodemailer.createTransport({
  service: tokritikumari@gmail.com,
  auth: {
    user: tokritikumari@gmail.com,
    pass: Kriti123
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: EMAIL_USER,
    to: 'tokritikumari@gmail.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
