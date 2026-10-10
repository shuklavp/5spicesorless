// src/config/forms.js
// Centralized configuration for form submissions across 5 Spices or Less.
// Supports Web3Forms (https://web3forms.com), Formspree, or custom Cloudflare Worker endpoints.

export const FORMS_CONFIG = {
  // Web3Forms Access Key (Free, no server required, forwards directly to your email)
  // Get your free key in 30 seconds at: https://web3forms.com
  web3formsAccessKey: 'YOUR_ACCESS_KEY_HERE',

  // Optional: Formspree endpoint (e.g., 'https://formspree.io/f/mqknzryp')
  formspreeEndpoint: '',

  // Fallback contact email:
  fallbackEmail: 'vivek@5spicesorless.com',
};
