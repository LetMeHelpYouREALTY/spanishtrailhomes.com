import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { createOgImageUrl, createWebPageSchema, getCanonicalUrl } from '@/lib/structuredData'
import { SectionBanner } from '@/components/heading-media'


const pageUrl = 'https://www.spanishtrailhomes.com/address-autocomplete'
const pageDescription =
  'Use Google Maps Platform Address Autocomplete to help customers enter the right address. Increase sales conversion up to 15%. Simply copy and paste the code to your website. Get started at no cost.'

const webPageSchema = createWebPageSchema({
  name: 'Address Autocomplete | Google Maps Platform | Spanish Trail Homes',
  description: pageDescription,
  path: '/address-autocomplete',
  type: 'WebPage',
  extra: {
    about: {
      '@type': 'SoftwareApplication',
      name: 'Google Maps Platform Address Autocomplete',
      applicationCategory: 'WebApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Get started at no cost with Google Maps Platform',
      },
    },
  },
})

export const metadata: Metadata = {
  title: 'Address Autocomplete | Google Maps Platform | Spanish Trail Homes',
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl('/address-autocomplete'),
  },
  openGraph: {
    url: pageUrl,
    title: 'Address Autocomplete | Google Maps Platform | Spanish Trail Homes',
    description:
      'Add address autocomplete from Google Maps Platform. Help customers enter the right address. Increase conversion up to 15%.',
    images: [
      createOgImageUrl({
        title: 'Address Autocomplete',
        subtitle: 'Google Maps Platform integration',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Address Autocomplete | Google Maps Platform',
    description: 'Help customers enter the right address. Increase sales conversion up to 15%.',
    images: [
      createOgImageUrl({
        title: 'Address Autocomplete',
        subtitle: 'Get started at no cost',
        eyebrow: 'SpanishTrailHomes.com',
      }),
    ],
  },
}

type BenefitItem = {
  title: string
  description: string
  stat?: string
}

const benefits: BenefitItem[] = [
  {
    title: 'Increase sales conversion',
    description:
      'Address autocomplete reduces friction in checkout and contact forms. Customers complete forms faster with fewer errors, leading to higher conversion rates.',
    stat: 'Up to 15%',
  },
  {
    title: 'Reduce address errors',
    description:
      'Google Maps Platform validates addresses in real-time, helping customers enter accurate delivery and billing addresses. Fewer returns, fewer failed deliveries.',
    stat: '80% fewer',
  },
  {
    title: 'Faster form completion',
    description:
      'Type-ahead suggestions let users select their address with just a few keystrokes. Mobile users especially benefit from reduced typing on small screens.',
    stat: '3x faster',
  },
]

type StepItem = {
  title: string
  description: string
}

const steps: StepItem[] = [
  {
    title: 'Get started at no cost',
    description:
      'Google Maps Platform offers $200 monthly credit—enough for most small-to-medium sites. Sign up with your Google account and create a project in the Cloud Console.',
  },
  {
    title: 'Enable Places API',
    description:
      'In the Google Cloud Console, enable the Places API (includes Autocomplete). Generate an API key and restrict it to your domain for security.',
  },
  {
    title: 'Copy and paste the code',
    description:
      'Add the JavaScript snippet to your website. The autocomplete widget attaches to any text input and provides address suggestions as users type.',
  },
]

export default function AddressAutocompletePage() {
  return (
    <SiteShell>
      <Script
        id="address-autocomplete-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webPageSchema)}
      </Script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Address Autocomplete', href: '/address-autocomplete' },
        ]}
      />

      <HeroSection />
      <BenefitsSection benefits={benefits} />
      <HowItWorksSection steps={steps} />
      <LiveDemoSection />
      <CodeSnippetSection />
      <RealEstateUseCaseSection />
      <GetStartedSection />
    </SiteShell>
  )
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0f2b1e] px-6 py-20 text-primary-foreground sm:py-28 isolate"
      aria-labelledby="autocomplete-hero-heading"
    >
      <SectionBanner headingId="autocomplete-hero-heading" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-primary-foreground/80">
          Google Maps Platform
        </p>
        <h1
          id="autocomplete-hero-heading"
          className="mt-4 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          Add address autocomplete
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-primary-foreground/90 sm:text-lg">
          Use Autocomplete from Google Maps Platform to help customers enter the right address.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium">
            Increase sales conversion up to 15%
          </div>
          <div className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium">
            Get started at no cost
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="#get-started">Get Started Free</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href="#demo">Try Live Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection({ benefits }: { benefits: BenefitItem[] }) {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="benefits-heading"
    >
      <SectionBanner headingId="benefits-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="benefits-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Why add address autocomplete?
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Address autocomplete improves user experience, reduces errors, and increases conversions across your website forms.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex flex-col rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/5"
            >
              {benefit.stat && (
                <span className="mb-3 font-[var(--font-playfair)] text-3xl text-[#0f2b1e]">
                  {benefit.stat}
                </span>
              )}
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                {benefit.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#372a20]/85">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HowItWorksSection({ steps }: { steps: StepItem[] }) {
  return (
    <section
      className="bg-[#f8f2e7] py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <SectionBanner headingId="how-it-works-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.5em] text-[#6f5237]">
          Simple integration
        </p>
        <h2
          id="how-it-works-heading"
          className="mt-2 font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl"
        >
          Simply copy and paste the code to your website
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Get address autocomplete running on your site in minutes. No complex backend setup required.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col rounded-3xl border border-[#d8cdbf] bg-white p-6 shadow-md"
            >
              <span
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2b1e] text-sm font-semibold text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#372a20]/85">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function LiveDemoSection() {
  return (
    <section
      id="demo"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="demo-heading"
    >
      <SectionBanner headingId="demo-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="demo-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Try address autocomplete
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Experience how Google Maps Platform autocomplete helps users find and select addresses quickly. Start typing an address below.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
              <label
                htmlFor="address-demo"
                className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-3"
              >
                Enter your address
              </label>
              <input
                id="address-demo"
                type="text"
                placeholder="Start typing an address..."
                className="w-full rounded-lg border border-[#d8cdbf] bg-white px-4 py-3 text-base outline-none focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
                aria-describedby="address-demo-hint"
              />
              <p id="address-demo-hint" className="mt-3 text-xs text-[#372a20]/70">
                Demo: Type &quot;5050 Spanish Trail&quot; to see suggestions for our location
              </p>
            </div>
            <div className="space-y-3 text-sm text-[#372a20]/85">
              <h3 className="font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                How it works
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>User starts typing an address</li>
                <li>Google returns matching suggestions in real-time</li>
                <li>User selects the correct address from the dropdown</li>
                <li>Full address details populate your form fields</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f5237] mb-4">
              Returned address components
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-[#d8cdbf] pb-2">
                <span className="text-[#372a20]/70">Street Address</span>
                <span className="font-medium text-[#0f2b1e]">5050 Spanish Trail Ln</span>
              </div>
              <div className="flex justify-between border-b border-[#d8cdbf] pb-2">
                <span className="text-[#372a20]/70">City</span>
                <span className="font-medium text-[#0f2b1e]">Las Vegas</span>
              </div>
              <div className="flex justify-between border-b border-[#d8cdbf] pb-2">
                <span className="text-[#372a20]/70">State</span>
                <span className="font-medium text-[#0f2b1e]">NV</span>
              </div>
              <div className="flex justify-between border-b border-[#d8cdbf] pb-2">
                <span className="text-[#372a20]/70">ZIP Code</span>
                <span className="font-medium text-[#0f2b1e]">89113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#372a20]/70">Country</span>
                <span className="font-medium text-[#0f2b1e]">United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeSnippetSection() {
  const codeSnippet = `<!-- Add Google Maps Platform script -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete" async defer></script>

<script>
function initAutocomplete() {
  // Get the input element
  const input = document.getElementById('address-input');
  
  // Create the autocomplete widget
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ['address'],
    componentRestrictions: { country: 'us' }
  });
  
  // Handle place selection
  autocomplete.addListener('place_changed', function() {
    const place = autocomplete.getPlace();
    
    // Extract address components
    const streetNumber = getComponent(place, 'street_number');
    const route = getComponent(place, 'route');
    const city = getComponent(place, 'locality');
    const state = getComponent(place, 'administrative_area_level_1');
    const zip = getComponent(place, 'postal_code');
    
    // Populate form fields
    document.getElementById('street').value = streetNumber + ' ' + route;
    document.getElementById('city').value = city;
    document.getElementById('state').value = state;
    document.getElementById('zip').value = zip;
  });
}

function getComponent(place, type) {
  const component = place.address_components?.find(c => c.types.includes(type));
  return component?.short_name || '';
}
</script>

<!-- Your address input field -->
<input type="text" id="address-input" placeholder="Enter address...">`

  return (
    <section
      className="bg-[#1a1a1a] py-20 sm:py-24 text-white"
      aria-labelledby="code-heading"
    >
      <SectionBanner headingId="code-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="code-heading"
          className="font-[var(--font-playfair)] text-2xl sm:text-3xl"
        >
          Copy and paste this code
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
          Add this JavaScript snippet to your website. Replace YOUR_API_KEY with your Google Maps Platform API key.
        </p>
        <div className="mt-8 rounded-2xl bg-[#0d0d0d] p-6 overflow-x-auto">
          <pre className="text-sm leading-relaxed text-green-400 font-mono whitespace-pre-wrap">
            {codeSnippet}
          </pre>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#1a1a1a] hover:bg-white/90"
          >
            <Link href="https://developers.google.com/maps/documentation/javascript/places-autocomplete" target="_blank" rel="noopener noreferrer">
              View Full Documentation
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href="https://console.cloud.google.com/apis/library/places-backend.googleapis.com" target="_blank" rel="noopener noreferrer">
              Get API Key
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function RealEstateUseCaseSection() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="real-estate-heading"
    >
      <SectionBanner headingId="real-estate-heading" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="real-estate-heading"
          className="font-[var(--font-playfair)] text-2xl text-[#1f2a24] sm:text-3xl"
        >
          Perfect for real estate websites
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#372a20]/85">
          Address autocomplete is essential for property search, home valuations, and contact forms on real estate sites.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Property Search',
              description:
                'Let buyers search by address, neighborhood, or ZIP code. Autocomplete ensures they find the right area every time.',
              icon: '🏠',
            },
            {
              title: 'Home Valuations',
              description:
                'Accurate addresses are critical for CMA requests and instant home value estimates. Reduce errors in valuation forms.',
              icon: '📊',
            },
            {
              title: 'Listing Submissions',
              description:
                'Sellers entering their property address get validated input, ensuring MLS-ready data from the start.',
              icon: '📝',
            },
            {
              title: 'Contact Forms',
              description:
                'Capture accurate lead addresses for follow-up mailers, market reports, and personalized outreach.',
              icon: '✉️',
            },
            {
              title: 'Showing Requests',
              description:
                'When buyers request showings, autocomplete ensures agents receive the correct property address.',
              icon: '🗓️',
            },
            {
              title: 'Service Area Verification',
              description:
                'Instantly verify if an address falls within your service area or a specific community like Spanish Trail.',
              icon: '📍',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#d8cdbf] bg-[#fdf9f3] p-6 shadow-lg shadow-primary/5"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-[#0f2b1e]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#372a20]/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="bg-[#0f2b1e] py-20 sm:py-24 text-white"
      aria-labelledby="get-started-heading"
    >
      <SectionBanner headingId="get-started-heading" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          id="get-started-heading"
          className="font-[var(--font-playfair)] text-3xl sm:text-4xl"
        >
          Get started at no cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80">
          Google Maps Platform offers $200 in free monthly usage—enough for thousands of autocomplete requests. Most small-to-medium websites stay within the free tier.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Monthly Credit</p>
            <p className="mt-2 font-[var(--font-playfair)] text-3xl">$200</p>
            <p className="mt-2 text-sm text-white/70">Free every month</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Per Request</p>
            <p className="mt-2 font-[var(--font-playfair)] text-3xl">$0.00283</p>
            <p className="mt-2 text-sm text-white/70">Autocomplete (per session)</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Free Requests</p>
            <p className="mt-2 font-[var(--font-playfair)] text-3xl">~70K</p>
            <p className="mt-2 text-sm text-white/70">Sessions per month</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#0f2b1e] hover:bg-[#efe5d8]"
          >
            <Link href="https://console.cloud.google.com/getting-started" target="_blank" rel="noopener noreferrer">
              Create Free Account
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Dr. Jan Duffy</Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/60">
          Need help integrating address autocomplete on your real estate website?{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-white">
            Contact us
          </Link>{' '}
          for guidance.
        </p>
      </div>
    </section>
  )
}
