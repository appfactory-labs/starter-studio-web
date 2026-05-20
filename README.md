# Starter Studio Website

A professional static company website for **App Factory**, operated by **Starter Studio, Inc.**.

## Tech stack
- Vite
- React
- TypeScript

## Local setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Netlify deployment notes
- Build command: `npm run build`
- Publish directory: `dist`
- Add your production domain in Netlify site settings.

A `netlify.toml` file is included for standard static deployment.

## Domain
- `starterstudio.us`

## Pages
- Home (`/`)
- Privacy Policy (`/privacy`)
- Terms of Use (`/terms`)
- Support (`/support`)


## Netlify Forms
- The `/support` page uses a static Netlify form (`support-contact`) for submissions.
- Configure Netlify form notifications in the Netlify dashboard for your preferred inbox destination.
- The public website does not display contact email addresses; visitor contact is routed through the Support form.
