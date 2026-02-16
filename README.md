<<<<<<< HEAD
# ulo-landing
Ulo test website
=======
# Ulo Website

Static multi-page marketing site for Ulo.

## Stack

- HTML
- CSS
- Vanilla JavaScript

## Pages

- `index.html` (Home)
- `services.html`
- `clarity-audit.html`
- `booking.html`
- `lite-trial.html`
- `client-expectations.html`
- `about.html`

## Local preview

Run from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages deploy

This repo includes `.github/workflows/deploy-pages.yml` for automatic deploys.

1. Push this folder as a GitHub repository (branch: `main`).
2. In GitHub: `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`.
3. Push changes to `main`; deploy runs automatically.

## Notes before launch

- Replace `Booking link coming soon` in `booking.html` with your live Calendly URL.
- Replace `Email coming soon` in `booking.html` with your live contact email link.
- Connect audit submission to your preferred backend/CRM when ready.
>>>>>>> 7adb1f6 (Initial Ulo website)
