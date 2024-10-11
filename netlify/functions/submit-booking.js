const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, phone, date, time, guests, seatingType, specialRequests } = JSON.parse(event.body);

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host if not using Gmail
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    let mailOptions = {
      from: '"Noshe Cambridge Booking" <bookings@noshecambridge.com>',
      to: 'khan7akh@gmail.com', // Restaurant manager's email
      subject: 'New Booking Request',
      text: `
        New booking request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
        Time: ${time}
        Guests: ${guests}
        Seating Type: ${seatingType}
        Special Requests: ${specialRequests}
      `,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Seating Type:</strong> ${seatingType}</p>
        <p><strong>Special Requests:</strong> ${specialRequests}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking submitted successfully' })
    };
  } catch (error) {
    console.error('Error processing booking:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to process booking' })
    };
  }
};