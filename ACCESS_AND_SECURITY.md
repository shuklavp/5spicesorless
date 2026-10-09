# 5 Spices or Less: Dispatch Studio Access & Security Guide

**Date:** October 9, 2026  
**Audience:** Vivek Shukla (Author & Operator)

---

## 1. Can Anyone Else Post to the Website Using This Link?

**No. It is technically impossible for anyone to post to your website through the Studio link.**

### Why It Is 100% Secure:
1. **Serverless Static Architecture ($0/month):**
   * *5 Spices or Less* is hosted on Cloudflare Pages as a high-speed static single-page application.
   * There is **no backend database, no WordPress admin panel, and no server listening for upload requests**.
2. **The Studio is a Client-Side Scratchpad:**
   * When you type in the Studio, everything runs solely in your local browser window.
   * The **Copy Dispatch Code** button only copies formatted code to your local computer's clipboard. It does not send network requests or write to any server.
3. **Publishing Requires Git Access:**
   * The only way a new story goes live on `https://5spicesorless.com` is by adding the story code into `src/data/essays.js` and pushing that commit to your private GitHub repository (`shuklavp/5spicesorless`).
   * Cloudflare Pages then pulls the change and compiles the production site.
   * Even if a stranger found the `/studio` URL, typed an entire article, and clicked every button, **zero bytes would ever be posted or changed on your live website**.

---

## 2. How You Access the Studio

* **Direct Private URL:**  
  Navigate directly to:  
  `https://5spicesorless.com/studio`  
  *(Or `http://localhost:5173/studio` during local development)*

* **Private Unlisted Route:**  
  All public links to `/studio` have been removed from the website footer and archive headers. Regular visitors navigating the site will never see an authoring button or link.

* **Author Passkey Gate:**  
  When you open `/studio`, a private gate prompts for the author passkey:  
  * **Default Passkey:** `5spices`  
  * Entering it unlocks the Studio and saves your authorization in your browser so you do not have to re-enter it constantly on your own device.

---

## 3. The 3-Step Publishing Routine

When you write a new dispatch:

1. **Open the Studio:** Go to `https://5spicesorless.com/studio`.
2. **Draft & Preview:** Choose your Desk (*Life*, *Food*, *Work*, *Fiction*) and sub-category, enter your title, pull quote, takeaways, and body text. Check the live reading canvas on the right.
3. **Publish:**
   * Click **Copy Dispatch Code**.
   * Open `src/data/essays.js` on your computer or GitHub, paste the block into the array, and push to GitHub.
   * Cloudflare Pages automatically updates the live website in under 60 seconds.
