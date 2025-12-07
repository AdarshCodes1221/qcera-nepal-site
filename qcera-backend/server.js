import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Check if environment variables are configured
if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
  console.error('ERROR: GMAIL_USER and GMAIL_PASSWORD must be configured in .env file');
  console.error('Please update the .env file with your Gmail credentials');
}

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
    console.error('Make sure your GMAIL_USER and GMAIL_PASSWORD are correct in .env file');
  } else {
    console.log('✅ Email service is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, phone, email, product, message } = req.body;

  // Validation
  if (!name || !phone || !email || !product || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  try {
    // Email to business owner
    const businessEmailContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .header { background-color: #1f2937; color: white; padding: 20px; border-radius: 5px 5px 0 0; text-align: center; }
            .header h1 { margin: 0; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #555; margin-top: 5px; }
            .footer { background-color: #f3f4f6; padding: 15px; border-radius: 0 0 5px 5px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Enquiry Received</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Customer Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Product Interested In:</div>
                <div class="value">${product}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated message from QCERA Nepal Traders and Suppliers website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to customer (confirmation)
    const customerEmailContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .header { background-color: #1f2937; color: white; padding: 20px; border-radius: 5px 5px 0 0; text-align: center; }
            .header h1 { margin: 0; }
            .content { padding: 20px; }
            .footer { background-color: #f3f4f6; padding: 15px; border-radius: 0 0 5px 5px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Your Enquiry!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>We have received your enquiry and appreciate your interest in QCERA Nepal Traders and Suppliers.</p>
              <p>Our team will review your message and get back to you within 24 hours.</p>
              <p><strong>Enquiry Details:</strong></p>
              <ul>
                <li><strong>Product:</strong> ${product}</li>
                <li><strong>Your Email:</strong> ${email}</li>
                <li><strong>Your Phone:</strong> ${phone}</li>
              </ul>
              <p>If you have any urgent queries, please feel free to contact us directly:</p>
              <ul>
                <li><strong>Phone:</strong> +977 9804955582, 9807916468, 9845890208</li>
                <li><strong>Email:</strong> tradersqceranepal@gmail.com</li>
              </ul>
            </div>
            <div class="footer">
              <p>QCERA Nepal Traders and Suppliers © 2025. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to business owner
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Enquiry from ${name} - ${product}`,
      html: businessEmailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We Received Your Enquiry - QCERA Nepal',
      html: customerEmailContent,
    });

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! Check your email for confirmation.',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    
    let errorMessage = 'Failed to submit enquiry. Please try again later.';
    
    if (error.message.includes('Invalid login')) {
      errorMessage = 'Email service configuration error. Please check your Gmail credentials.';
    } else if (error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Cannot connect to email service. Please try again later.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
