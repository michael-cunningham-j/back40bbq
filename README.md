# Back 40 BBQ — Website

Static one-page website for **Back 40 BBQ, Inc.** in Marion, IA.

## Files
- `index.html` — Main page
- `styles.css` — All styling (brand red `#DC322D` matched from logo)
- `script.js` — Formspree submission handler + nav scroll highlighting
- `logo.png` — Iowa-shape Back 40 BBQ logo
- `matt.png` — About section photo of Matt with the smoker
- `brisket.png` — Landing page hero background

## Local Preview
1. Unzip into any folder
2. Double-click `index.html` — it opens in your browser

> Note: The contact form submission only works once you've set up Formspree (below) AND the site is served from a URL (Formspree may reject submissions from `file://`). Deploy first, then test the form.

## Deploy to GitHub Pages
1. Upload all files to your GitHub repo
2. **Settings → Pages → Source: main branch / root → Save**
3. Visit `https://<username>.github.io/<repo>/`

## 🔧 Setting Up Formspree (5 minutes)

The contact form is wired to **Formspree** — a free service that emails form submissions to Matt without needing a backend.

### Steps:
1. Go to **https://formspree.io** and click **Get Started**
2. Sign up with Matt's email address (free tier: 50 submissions/month)
3. Create a new form — name it "Back 40 BBQ Catering Inquiries"
4. Copy the form's endpoint URL — it looks like:
   ```
   https://formspree.io/f/xkgwabcd
   ```
5. Open `index.html` → find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
6. Replace `YOUR_FORM_ID` with the ID from step 4 (e.g., `xkgwabcd`)
7. Save and re-upload `index.html` to GitHub
8. Submit a test message — Formspree will send a confirmation email to verify Matt's address

That's it! Every form submission will land in Matt's inbox.

## To-Do
- Set up Formspree and replace `YOUR_FORM_ID` in `index.html`
