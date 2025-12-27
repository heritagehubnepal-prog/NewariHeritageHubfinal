// functions/api.ts
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Log for debugging
  console.log('Received request:', event.httpMethod, event.path);

  if (event.httpMethod !== 'POST' || event.path !== '/api/login') {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not found' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { username, password } = body;

    // Mock login logic (replace with real DB check later)
    if (username === 'admin' && password === 'admin123') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          message: 'Login successful',
          token: 'fake-jwt-token-123'
        }),
      };
    } else {
      return {
        statusCode: 401,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'Invalid credentials'
        }),
      };
    }
  } catch (err) {
    console.error('Login error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: 'Server error'
      }),
    };
  }
};