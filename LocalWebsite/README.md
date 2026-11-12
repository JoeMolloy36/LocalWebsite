# LocalWebsite

Astro site for a restaurant / bar. Four pages: Home, Info, Menu (PDF), Contact.

```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Things to edit
- Restaurant name, address, hours, phone: `src/data/site.ts`
- Menu: replace `public/menu.pdf` with your real menu (keep the filename)
- Contact form: set the `action` URL in `src/pages/contact.astro` (e.g. a Formspree endpoint)
- Colours and fonts: CSS variables at the top of `src/layouts/Layout.astro`
