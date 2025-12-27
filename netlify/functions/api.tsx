// functions/api.ts
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  const { httpMethod, path } = event;

  // Login route
  if (httpMethod === 'POST' && path === '/api/login') {
    const body = JSON.parse(event.body || '{}');
    if (body.email === 'admin@example.com' && body.password === 'secret123') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, token: 'fake-jwt-token' }),
      };
    }
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid credentials' }),
    };
  }

  // Stories route
  if (httpMethod === 'GET' && path === '/api/stories') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { id: 1, title: "Sample Story", description: "This is a sample story." },
        { id: 2, title: "Another Story", description: "More content here." }
      ]),
    };
  }

  // Heritage Items route
  if (httpMethod === 'GET' && path === '/api/heritage') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { id: 1, name: "Ancient Pottery", category: "Artifacts" },
        { id: 2, name: "Traditional Mask", category: "Cultural" }
      ]),
    };
  }

  // Characters route
  if (httpMethod === 'GET' && path === '/api/characters') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { id: 1, name: "Rajesh", role: "Ambassador" },
        { id: 2, name: "Sita", role: "Storyteller" }
      ]),
    };
  }

  // Services route
  if (httpMethod === 'GET' && path === '/api/services') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { id: 1, name: "Guided Tours", description: "Explore heritage sites with local guides." },
        { id: 2, name: "Workshops", description: "Learn traditional crafts and music." }
      ]),
    };
  }

  // Admin stats route
  if (httpMethod === 'GET' && path === '/api/admin/stats') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        totalStories: 2,
        totalHeritageItems: 2,
        totalCharacters: 2,
        totalServices: 2
      }),
    };
  }

  // Fallback
  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Route not found' }),
  };
};