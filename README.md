# My Business Website

A modern, responsive business website built with React and Tailwind CSS.

## Features

✨ **Product Showcase** - Display your products professionally
🛒 **Order System** - Customers can place orders directly
💳 **Payment Ready** - Integration ready for Stripe, PayPal, bKash, Nagad
📱 **Mobile Responsive** - Works perfectly on all devices
🚀 **Fast & Optimized** - Built with Vite for lightning-fast performance
🔥 **Firebase Ready** - Database and authentication ready
💬 **WhatsApp Orders** - Direct WhatsApp ordering button

## Quick Start

### Prerequisites
- Node.js installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

### Free Deployment with Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import this repository
4. Click Deploy
5. Your website is live!

## Customization

Edit `src/App.jsx` to:
- Change business name
- Update products
- Modify prices
- Add your phone number for WhatsApp
- Customize colors and styling

## Firebase Setup

Replace the Firebase config in `src/App.jsx` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_ID',
  appId: 'YOUR_APP_ID'
}
```

## License

MIT
