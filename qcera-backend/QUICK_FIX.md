# 🔧 QUICK FIX - Email Configuration

## ❌ Problem
The enquiry form is failing because the Gmail credentials in the `.env` file are NOT configured.

## ✅ Solution - Follow These Steps:

### Step 1: Get Your Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Sign in to your Gmail account
3. Select "Mail" and "Windows Computer"
4. Google will generate a 16-character password
5. Copy this password

### Step 2: Edit the `.env` File
1. Open the file: `backend/.env`
2. Change this line:
   ```
   GMAIL_USER=your-email@gmail.com
   ```
   To your actual Gmail address (e.g., `myemail@gmail.com`)

3. Change this line:
   ```
   GMAIL_PASSWORD=your-app-password
   ```
   To your 16-character Google App Password (paste without spaces)

### Step 3: Save and Restart
1. Save the `.env` file
2. Stop the backend server (if running)
3. Start it again: `npm start`
4. Run the test: `node test-email.js`

## Example `.env` File (After Setup)
```
GMAIL_USER=myemail@gmail.com
GMAIL_PASSWORD=abcd1234efgh5678
RECIPIENT_EMAIL=tradersqceranepal@gmail.com
PORT=5000
NODE_ENV=development
```

## ⚠️ Important Notes
- **Never use your actual Gmail password** - always use the 16-character App Password
- If you don't see "App passwords" option, enable 2-Step Verification first
- The App Password should be 16 characters with spaces (paste them as-is into the .env file)

## Testing After Setup
Run this command to verify everything is working:
```bash
node test-email.js
```

If successful, you'll see: ✅ Email Service Connected Successfully!

Then the contact form will work properly!
