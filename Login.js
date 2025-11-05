import express from 'express';
import EventEmitter from 'events';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

const password = 'keth owbh dbpd zldk';
const event = new EventEmitter();

async function sendMail(title, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shashwathkarkera119@gmail.com',
        pass: password,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: 'shashwathkarkera119@gmail.com',
      to: 'shashwathkarkera119@gmail.com',
      subject : title,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

event.on('Login-success', () => {
  console.log('Someone logged in from Sahyadri Backend Workshop, is it you?');
  sendMail(
    'Login Alert : Successful Login',
    'Someone logged in from Sahyadri Backend Workshop. If this was not you, please verify immediately.'
  );
});

event.on('Login-failure', () => {
  console.log('Someone tried to log in from Sahyadri Backend Workshop! If it wasn’t you, change your password immediately!');
  sendMail(
    'Security Alert : Failed Login Attempt',
    'Someone tried to log in from Sahyadri Backend Workshop. If this was not you, please secure your account immediately.'
  );
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'Shashwath' && password === 'Password123') {
    event.emit('Login-success');
    console.log('Login successful');
    res.send('Login successful');
  } else {
    event.emit('Login-failure');
    console.log('Login failed');
    res.send('Invalid username or password');
  }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
