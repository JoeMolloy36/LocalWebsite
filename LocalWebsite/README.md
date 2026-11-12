# Adie's Bar & Restaurant, Lanesborough

Astro site: Home, Info, Menu (PDF) and Contact.

```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Things to edit
- Name, address, phone, email, social links, opening hours: `src/data/site.ts`
  (while `hours` is empty the site points people to Instagram / phone)
- Menu: replace `public/menu.pdf` (keep the filename)
- Contact form: set `formAction` in `src/pages/contact.astro` (e.g. a Formspree endpoint)
- Colours and fonts: CSS variables at the top of `src/layouts/Layout.astro`
