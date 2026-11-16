// src/config/forms.js
// Centralized configuration for form submissions across 5 Spices or Less.
// Supports Web3Forms (https://web3forms.com), Formspree, or custom Cloudflare Worker endpoints.

export const FORMS_CONFIG = {
  // Web3Forms Access Key (Free, no server required, forwards directly to your email)
  // Get your free key in 30 seconds at: https://web3forms.com
  web3formsAccessKey: 'YOUR_ACCESS_KEY_HERE',

  // Optional: Formspree endpoint (e.g., 'https://formspree.io/f/xvkzbwak')
  formspreeEndpoint: '',

  // Fallback contact email:
  fallbackEmail: 'vivek@5spicesorless.com',
};

// Each form reads its own endpoint, so the newsletter, the Letterbox and the
// advisory enquiries can be sent to separate Formspree forms.
//
// Until separate forms exist, all three use the original endpoint below. Every
// submission also carries a `form_type` field and a distinct `_subject`
// ("advisory", "letterbox" or "newsletter"), so they can be told apart in the
// Formspree inbox today.
//
// To split them: create a form in Formspree for each one, then either set
// PUBLIC_FORMSPREE_ADVISORY / PUBLIC_FORMSPREE_LETTERBOX / PUBLIC_FORMSPREE_NEWSLETTER
// in the Cloudflare Pages environment variables (and redeploy), or paste the new
// URL over the matching value here.
const ORIGINAL_ENDPOINT = 'https://formspree.io/f/xvkzbwak';
const env = (typeof import.meta !== 'undefined' && import.meta.env) || {};

export const FORM_ENDPOINTS = {
  advisory: env.PUBLIC_FORMSPREE_ADVISORY || ORIGINAL_ENDPOINT,
  letterbox: env.PUBLIC_FORMSPREE_LETTERBOX || ORIGINAL_ENDPOINT,
  newsletter: env.PUBLIC_FORMSPREE_NEWSLETTER || ORIGINAL_ENDPOINT,
};
