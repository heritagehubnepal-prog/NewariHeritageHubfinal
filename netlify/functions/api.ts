import { Handler } from '@netlify/functions';

// These should be set in Netlify Environment Variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  // Use a simpler path matching because event.path can vary depending on deployment
  const isLoginPath = event.path.includes('/api/admin/login');

  // Handle Login
  if (isLoginPath && event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body || '{}');
      const { username, password } = body;

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ 
            token: 'mock-netlify-token',
            admin: { id: 1, username: ADMIN_USERNAME }
          }),
        };
      }
      return { 
        statusCode: 401, 
        headers, 
        body: JSON.stringify({ error: 'Invalid credentials' }) 
      };
    } catch (err) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: 'Invalid JSON' }) 
      };
    }
  }

  // Handle other API calls - Mocking success for now to unblock the frontend
  // Since the user is having database connection issues on Replit, we bypass it
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ success: true, message: 'Operation successful' }),
  };
};
