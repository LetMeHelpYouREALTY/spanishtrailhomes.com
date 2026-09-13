export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
  /** Optional group label for organizing dropdown items */
  group?: string
}

const LISTINGS_HREF = '/spanish-trail-homes-for-sale-las-vegas'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Buy',
    href: '/buyers',
    children: [
      { label: 'Buy Spanish Trail homes', href: '/buyers', group: 'Realtor services' },
      { label: 'Spanish Trail listings', href: LISTINGS_HREF, group: 'Homes' },
      { label: 'Match a neighborhood', href: '/neighborhoods', group: 'Homes' },
    ],
  },
  {
    label: 'Sell',
    href: '/sellers',
    children: [
      { label: 'Sell your Spanish Trail home', href: '/sellers', group: 'Realtor services' },
      { label: 'Book a listing consult', href: '/contact', group: 'Realtor services' },
    ],
  },
  {
    label: 'Homes',
    href: LISTINGS_HREF,
    children: [
      { label: 'All Spanish Trail homes for sale', href: LISTINGS_HREF, group: 'Listings' },
      { label: '11 neighborhoods', href: '/neighborhoods', group: 'Listings' },
      { label: 'Estates', href: '/spanish-trail-country-club-estate-listings', group: 'Listings' },
      { label: 'Townhomes & villas', href: '/spanish-trail-townhomes-villas', group: 'Listings' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All realtor services', href: '/services', group: 'Practice' },
      { label: 'Buy Spanish Trail homes', href: '/buyers', group: 'Practice' },
      { label: 'Sell Spanish Trail homes', href: '/sellers', group: 'Practice' },
      { label: 'Private tours', href: '/contact', group: 'Practice' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Get in touch', href: '/contact', group: 'Connect' },
      { label: 'Dr. Jan Duffy', href: '/about', group: 'Your Agent' },
      { label: 'Reviews', href: '/reviews', group: 'Your Agent' },
    ],
  },
]
