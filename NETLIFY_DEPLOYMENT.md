# Netlify Deployment Guide - Heritage Hub Nepal Frontend

This guide helps you deploy Heritage Hub Nepal frontend to Netlify.

## Prerequisites

1. **Netlify Account**: Create one at [netlify.com](https://netlify.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Backend API**: Deploy the backend separately (see Backend Deployment section)

## Frontend Deployment Steps

### 1. Connect Your Repository to Netlify

1. Log in to Netlify
2. Click "Add new site" > "Import an existing project"
3. Choose GitHub and authorize Netlify
4. Select your repository
5. Click "Deploy site"

### 2. Configure Build Settings

Netlify should auto-detect the build settings:
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Node version**: 20 (set in netlify.toml)

### 3. Set Environment Variables

In Netlify Dashboard:

1. Go to **Site settings** > **Build & deploy** > **Environment**
2. Add the following environment variable:

```
VITE_API_URL = https://your-backend-api.com
```

Replace `https://your-backend-api.com` with your actual backend API URL.

### 4. Deploy

Your site will automatically deploy when you push to your main branch.

## Backend Deployment

You have several options to deploy the backend:

### Option A: Deploy Backend to Replit (Recommended)
- Keep the backend on Replit using their publishing feature
- Your backend URL will be something like: `https://your-replit-name.replit.dev`
- Use this URL as your `VITE_API_URL`

### Option B: Deploy Backend to Vercel
```bash
npm install -g vercel
vercel
```

### Option C: Deploy Backend to Railway
1. Create account at [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Set environment variables for DATABASE_URL
4. Deploy

### Option D: Deploy Backend to Other Providers
- Heroku, Render, AWS Lambda, Google Cloud Run, etc.
- Requirements: Node.js 20+, PostgreSQL database connection

## Database Setup

Your backend needs a PostgreSQL database:

### Option A: Neon Database (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Create a project
3. Get your DATABASE_URL connection string
4. Set it in your backend's environment variables

### Option B: Other PostgreSQL Providers
- Supabase, AWS RDS, Azure Database, DigitalOcean Managed Databases, etc.

## CORS Configuration

If your frontend and backend are on different domains:

1. Update `server/index.ts` with CORS headers:

```typescript
import cors from 'cors';

app.use(cors({
  origin: 'https://your-netlify-domain.netlify.app',
  credentials: true
}));
```

2. Install cors: `npm install cors`

## Troubleshooting

### "Failed to fetch" errors
- Check that `VITE_API_URL` is set correctly in Netlify
- Verify your backend is running and accessible
- Check browser console for detailed errors

### CORS errors
- Ensure backend has CORS headers configured
- Check that origin is whitelisted on backend

### Build failures
- Check Netlify's build logs in the Deploy section
- Ensure all dependencies are in package.json
- Try running `npm run build` locally to test

## Monitoring & Updates

1. **Automatic Deployments**: Every push to main branch triggers a deploy
2. **Logs**: View deployment logs in Netlify Dashboard
3. **Preview Deploys**: Create pull requests to test before merging
4. **Analytics**: Monitor in Netlify's Analytics section

## Local Testing

To test the full stack locally:

```bash
# Terminal 1: Start backend
npm run dev

# Terminal 2: Frontend already builds with backend
# Visit http://localhost:5000
```

To test frontend-only with remote backend:

```bash
VITE_API_URL=https://your-backend-api.com npm run dev
```

## Security Checklist

- [ ] Set `VITE_API_URL` environment variable securely
- [ ] Enable HTTPS (automatic on Netlify)
- [ ] Set CORS origin to your Netlify domain only
- [ ] Keep backend API key secure
- [ ] Enable Netlify's DDoS protection
- [ ] Set up regular backups for database

## Support

- Netlify Docs: https://docs.netlify.com
- Heritage Hub Nepal Issues: Check GitHub issues
