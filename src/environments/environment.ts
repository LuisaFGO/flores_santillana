import * as dotenv from 'dotenv';
dotenv.config();

export const environment = {
  production: false,
  apiUrl: process.env['APP_URL'] || 'http://localhost:3004/send_email',
};
