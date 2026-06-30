# Back 40 BBQ — Website

Static one-page website for **Back 40 BBQ, Inc.** in Marion, IA.

## Files
- `index.html` — Main page
- `styles.css` — All styling (brand red `#DC322D` matched from logo)
- `script.js` — Mobile hamburger menu + Formspree submission + scroll highlighting
- `logo.png` — Iowa-shape Back 40 BBQ logo (transparent background)
- `matt.png` — About section photo of Matt with the smoker
- `brisket.png` — Landing page hero background

## Mobile Support
- Below 820px width, the nav collapses into a hamburger menu (☰ icon).
- Tap to expand a clean dropdown with About / Menu / Reviews / Catering / Contact.
- Tapping a link auto-closes the menu and smooth-scrolls to the section.

## Local Preview
1. Unzip into any folder.
2. Double-click `index.html` — it opens in your browser.

## Deploy to GitHub Pages
1. Upload all files to your GitHub repo.
2. **Settings → Pages → Source: main branch / root → Save**
3. Visit `https://<username>.github.io/<repo>/`

## Formspree Setup (5 minutes)
1. Go to **https://formspree.io** and sign up with Matt's email.
2. Create a form ("Back 40 BBQ Catering Inquiries"). Copy its endpoint URL.
3. In `index.html`, replace `YOUR_FORM_ID` in:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Re-upload `index.html`. Done!
