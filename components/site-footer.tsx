'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { trackPhoneClick } from '@/lib/analytics'
import { CalendlyLink } from '@/components/calendly-link'
import {
  GBP_EASTER_2026_CLOSURE,
  GBP_SERVICE_AREA_LABEL,
  shouldShowPromotedSpecialHoursNotice,
} from '@/lib/gbp-business'

export function SiteFooter() {
  const footerLinks = [
    {
      heading: 'Realtor Services',
      links: [
        { label: 'All realtor services', href: '/services' },
        { label: 'Buy in Spanish Trail', href: '/buyers' },
        { label: 'Sell your Spanish Trail home', href: '/sellers' },
        { label: 'Book a private tour', href: '/contact' },
        { label: 'Relocation into 89113', href: '/relocation' },
        { label: 'Spanish Trail market report', href: '/spanish-trail-market-report' },
      ],
    },
    {
      heading: 'Homes for Sale',
      links: [
        { label: 'All Spanish Trail Homes', href: '/spanish-trail-homes-for-sale-las-vegas' },
        { label: 'Estate Listings', href: '/spanish-trail-country-club-estate-listings' },
        { label: 'Golf Course Properties', href: '/spanish-trail-luxury-golf-course-properties' },
        { label: 'Townhomes & Villas', href: '/spanish-trail-townhomes-villas' },
        { label: 'Waterfront Homes', href: '/spanish-trail-waterfront-golf-homes' },
        { label: 'Guard-Gated Homes', href: '/spanish-trail-guard-gated-golf-homes' },
      ],
    },
    {
      heading: 'Spanish Trail Community',
      links: [
        { label: '11 neighborhoods', href: '/neighborhoods' },
        { label: 'Community guide', href: '/communities/spanish-trail' },
        { label: 'Schools near Spanish Trail', href: '/spanish-trail-schools' },
        { label: 'HOA guide', href: '/spanish-trail-hoa-guide' },
        { label: 'Golf course', href: '/golf' },
        { label: 'Club & amenities', href: '/club' },
      ],
    },
    {
      heading: 'About & Contact',
      links: [
        { label: 'Meet Dr. Jan Duffy', href: '/about' },
        { label: 'Awards & Recognition', href: '/awards' },
        { label: 'Client Reviews', href: '/reviews' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Office Location', href: '/find-our-locations' },
        { label: 'Google Business Profile', href: '/google-business-profile' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/spanishtrailhomes', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/spanishtrailhomes', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/spanishtrailhomes', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@spanishtrailhomes', label: 'YouTube' },
  ]

  return (
    <footer className="bg-[#352922] text-[#f8f5ef]">
      <div className="border-b border-[#be9956]/40 bg-[#3e3028]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between safe-area-padding">
          <div className="space-y-2 text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em]">
            <p className="font-semibold text-[#f8f5ef]">Spanish Trail | Homes By Dr. Jan Duffy</p>
            <p className="text-[#cbb8a6]">Berkshire Hathaway HomeServices Nevada Properties</p>
            <p>Dr. Jan Duffy · Luxury Real Estate Advisor</p>
            <Link href="tel:+17027663299" className="touch-target inline-flex min-h-[44px] items-center hover:text-[#be9956] hover:underline" onClick={() => trackPhoneClick('footer')}>
              (702) 766-3299 · DrDuffySells@SpanishTrailHomes.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="touch-target inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#be9956]/40 p-2.5 text-[#f8f5ef] transition-colors hover:border-[#be9956] hover:text-[#be9956]"
              >
                <Icon className="size-5 sm:size-4" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-5">
        <div className="space-y-4 min-w-0 sm:col-span-2 lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#cbb8a6] sm:tracking-[0.4em]">
            Spanish Trail Luxury Realtor
          </p>
          <p className="font-[var(--font-playfair)] text-lg tracking-[0.06em] sm:text-xl sm:tracking-[0.08em]">
            5050 Spanish Trail Ln<br />Las Vegas, NV 89113
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#be9956]">
            Veteran-Owned Business
          </p>
          <p className="text-sm leading-relaxed text-[#efe5d8]">
            Exclusive realtor for Spanish Trail homes in 89113.
          </p>
          <p className="text-xs leading-relaxed text-[#cbb8a6]">
            Hours: Sun–Sat 9:00 AM–6:00 PM · Service area: {GBP_SERVICE_AREA_LABEL}
            {shouldShowPromotedSpecialHoursNotice() ? (
              <>
                <br />
                <span className="text-[#efe5d8]">
                  {GBP_EASTER_2026_CLOSURE.label}: {GBP_EASTER_2026_CLOSURE.detail}
                </span>
              </>
            ) : null}
          </p>
          <CalendlyLink 
            className="touch-target inline-flex min-h-[44px] items-center rounded-full border border-[#be9956] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#be9956] transition-colors hover:bg-[#be9956] hover:text-[#352922]" 
            ctaText="Book a Showing" 
            ctaLocation="footer"
          >
            Book a Showing
          </CalendlyLink>
        </div>
        {footerLinks.map((section) => (
          <div key={section.heading} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#be9956] sm:tracking-[0.3em]">
              {section.heading}
            </p>
            <ul className="space-y-0 text-sm tracking-[0.15em] sm:tracking-[0.2em]">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="touch-target flex min-h-[40px] items-center text-[#e5d7c8] transition-colors hover:text-[#be9956] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#be9956]/30 bg-[#36271f]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm leading-relaxed text-[#e5d7c8] sm:px-6 md:flex-row md:items-center md:justify-between md:py-8 safe-area-padding">
          <div className="space-y-3">
            <p>
              Equal Housing Opportunity · Dr. Jan Duffy · Spanish Trail | Homes By Dr. Jan Duffy · REALTOR® S.0197614.LLC ·
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
            <p>
              © {new Date().getFullYear()} Spanish Trail | Homes By Dr. Jan Duffy. This site is operated by Dr. Jan Duffy
              and Berkshire Hathaway HomeServices Nevada Properties; it is not the official website of Spanish Trail Country
              Club. Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered service
              marks of HomeServices of America, Inc.® Equal Housing Opportunity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] sm:gap-3 sm:tracking-[0.35em] md:text-sm">
            <Link href="/privacy" className="touch-target inline-flex min-h-[44px] items-center hover:text-[#be9956] hover:underline">
              Privacy Policy
            </Link>
            <span aria-hidden className="hidden sm:inline">·</span>
            <Link href="/terms" className="touch-target inline-flex min-h-[44px] items-center hover:text-[#be9956] hover:underline">
              Terms of Use
            </Link>
            <span aria-hidden className="hidden sm:inline">·</span>
            <Link href="/accessibility" className="touch-target inline-flex min-h-[44px] items-center hover:text-[#be9956] hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

