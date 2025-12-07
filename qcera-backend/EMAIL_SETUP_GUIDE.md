# Email Setup Guide for QCERA Nepal Traders and Suppliers

This guide will help you set up the email functionality for the contact form.

## Prerequisites

- Node.js installed
- Gmail account (or any email service)
- Gmail App Password (if using Gmail)

## Setup Instructions

### Step 1: Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled
3. Go to "App passwords" (search in the security settings)
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password
6. Copy this password

### Step 2: Configure Backend Environment

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. Edit the `.env` file and fill in your credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=tradersqceranepal@gmail.com
   PORT=5000
   NODE_ENV=development
   ```

### Step 3: Install Backend Dependencies

```bash
npm install
```

### Step 4: Run the Backend Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see: `Server is running on port 5000`

### Step 5: Verify Email Configuration

The server will automatically verify the email configuration on startup. You should see:
```
Email service is ready to send messages
```

## How It Works

1. User fills out the contact form in the frontend
2. Form data is sent to `http://localhost:5000/api/contact`
3. Backend server receives the data and sends two emails:
   - **Business Email**: Full enquiry details sent to `tradersqceranepal@gmail.com`
   - **Customer Email**: Confirmation email sent to the customer's email address
4. Frontend shows success message to the user

## Testing

To test if everything is working:

1. Make sure the backend server is running
2. Go to the contact form on the website
3. Fill in all fields and submit
4. You should receive an email at `tradersqceranepal@gmail.com`
5. The customer should receive a confirmation email

## Troubleshooting

**Issue: "Failed to submit enquiry. Please check if the server is running."**
- Make sure the backend server is running on port 5000
- Check if you're on the same network or localhost

**Issue: "GMAIL_USER is not configured"**
- Make sure the `.env` file exists in the backend folder
- Check that all required environment variables are set

**Issue: "Invalid login credentials"**
- Make sure you're using an App Password, not your regular Gmail password
- If using Gmail, ensure 2-Step Verification is enabled

**Issue: Emails not being received**
- Check the backend console for error messages
- Verify the `.env` file has correct email addresses
- Check your email spam/junk folder
- Make sure the Gmail account allows "Less secure apps" (if not using App Password)

## Deployment Notes

When deploying to production:

1. Update the API endpoint in `ContactSection.tsx` from `http://localhost:5000` to your server URL
2. Store `.env` variables securely (use environment variables on your hosting platform)
3. Enable CORS properly for your domain
4. Use HTTPS in production
5. Consider adding rate limiting to prevent spam

## Security Best Practices

- Never commit `.env` file to version control
- Use environment variables on production servers
- Consider adding reCAPTCHA to the form
- Implement rate limiting on the API endpoint
- Validate and sanitize all inputs on the backend

## Support

For more information on Nodemailer configuration:
https://nodemailer.com/smtp/
