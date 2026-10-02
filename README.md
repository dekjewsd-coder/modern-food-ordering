# Modern Food Ordering Website

A modern bilingual food ordering website for **pickup orders**, built with Next.js, React, Tailwind CSS and Framer Motion.

## Features

- Thai / English language switcher
- Sticky responsive navigation
- Food categories with animated filtering
- Food detail modal with add-ons
- Cart sidebar with quantity controls
- Pickup time selection
- Checkout form and order summary
- Order success screen with order number
- Responsive mobile-first UI
- Unsplash food images

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload the **contents of this folder** to the repository.
3. Go to Vercel and import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Click **Deploy**.

No environment variables are required for this demo.

## Important

This project is a frontend prototype. Orders are currently stored only in browser state and are not sent to a database or restaurant POS. To use it as a production ordering system, add a backend/database, order API, authentication, payment flow, and real order notifications.
