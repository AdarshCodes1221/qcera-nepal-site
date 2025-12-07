import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log('🔍 Checking Email Configuration...\n');

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;
const recipientEmail = process.env.RECIPIENT_EMAIL;

console.log('Configuration Status:');
console.log('─'.repeat(50));
console.log(`GMAIL_USER: ${gmailUser ? '✅ Set' : '❌ NOT SET'}`);
console.log(`GMAIL_PASSWORD: ${gmailPassword ? '✅ Set' : '❌ NOT SET'}`);
console.log(`RECIPIENT_EMAIL: ${recipientEmail || 'tradersqceranepal@gmail.com'}`);
console.log('─'.repeat(50) + '\n');

if (!gmailUser || !gmailPassword) {
  console.error('❌ ERROR: Gmail credentials are not configured!');
  console.error('\n📝 To fix this:');
  console.error('1. Open the .env file in the backend folder');
  console.error('2. Replace "your-email@gmail.com" with your Gmail address');
  console.error('3. Replace "your-app-password" with your Gmail App Password\n');
  console.error('📚 For instructions, see: EMAIL_SETUP_GUIDE.md\n');
  process.exit(1);
}

console.log('🔐 Testing Email Connection...\n');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Connection Failed:', error.message);
    console.error('\n⚠️  Possible Issues:');
    console.error('   • Gmail credentials are incorrect');
    console.error('   • You\'re not using an App Password (if 2FA is enabled)');
    console.error('   • Gmail account has restricted access\n');
    process.exit(1);
  } else {
    console.log('✅ Email Service Connected Successfully!');
    console.log(`✅ Ready to send emails from: ${gmailUser}\n`);
    process.exit(0);
  }
});
