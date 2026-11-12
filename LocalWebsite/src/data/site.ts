export const site = {
  name: "Adie's",
  fullName: "Adie's Bar & Restaurant",
  tagline: 'Bar & Restaurant',
  town: 'Lanesborough',
  address: ['Main Street', 'Lanesborough', 'Co. Longford', 'N39 NX65'],
  phone: '043 33 21322',
  phoneHref: '+353433321322',
  email: '', // add an email here and it will show in the footer and on the contact page
  instagram: { handle: 'adiesbar_restaurant', url: 'https://www.instagram.com/adiesbar_restaurant/' },
  facebook: { handle: 'Adiesbar', url: 'https://www.facebook.com/Adiesbar' },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adies+Bar+and+Restaurant+Lanesborough+Longford',
  // Add opening hours here, e.g. { days: 'Monday to Thursday', time: '12pm to 11pm' }.
  // While this list is empty the site tells visitors to check Instagram or call.
  hours: [] as { days: string; time: string }[],
  hoursNote: '',
};

export const nav = {
  left: [
    { href: '/', label: 'Home' },
    { href: '/info', label: 'Info' },
  ],
  right: [
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
  ],
};
