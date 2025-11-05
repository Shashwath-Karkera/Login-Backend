import cron from 'node-cron';
import nodemailer from 'nodemailer';

const password = 'keth owbh dbpd zldk';

async function sendMail() {
  try {
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shashwathkarkera119@gmail.com',
    pass: password,
  },
  secure: false,                                // use STARTTLS, not SSL
  tls: {
    rejectUnauthorized: false,                  // ignore self-signed certs
  },
});

    const mailOptions = {
      from: 'shashwathkarkera119@gmail.com',
      to: 'shashwathkarkera119@gmail.com',
      subject: 'Cronjob Mail',
      text: 'This is a cronjob mail sent every minute',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Run every 30 seconds
cron.schedule('*/30 * * * * *', () => {
  console.log('Cronjob executed: sending mail...');
  sendMail();
});
