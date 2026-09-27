import { GBP_PHONE_DISPLAY, GBP_PHONE_E164 } from '@/lib/gbp-business'
import { SPANISH_TRAIL_COMMUNITY } from '@/lib/hyperlocal-amenities'

export const amenityPageFaqs = [
  {
    question: `What grocery stores are near ${SPANISH_TRAIL_COMMUNITY.name}?`,
    answer: `Whole Foods Market at 9420 W Sahara Ave and Trader Joe's at 8937 W Charleston Blvd are common runs from Spanish Trail—often about 10–15 minutes in typical traffic via Rainbow Blvd or the 215 beltway.`,
  },
  {
    question: `How far is ${SPANISH_TRAIL_COMMUNITY.name} from the Las Vegas Strip?`,
    answer: `Many buyers plan on an approximate 15–20 minute drive to major Strip resorts via Tropicana Avenue eastbound, though traffic and your exact gate exit change the time.`,
  },
  {
    question: `Are there hospitals near ${SPANISH_TRAIL_COMMUNITY.name}?`,
    answer: `Spring Valley Hospital Medical Center on S. Rainbow Blvd and Summerlin Hospital Medical Center in Town Center Drive are the full-service options buyers ask about most; exact drive time depends on gate exit and traffic.`,
  },
  {
    question: 'What golf is available inside Spanish Trail?',
    answer:
      'Spanish Trail Country Club operates a private 27-hole course (Sunrise, Lakes, and Canyon nines) inside the gates at 5050 Spanish Trail Ln. Membership is separate from HOA dues—Dr. Jan Duffy explains both before you write an offer.',
  },
  {
    question: 'Which schools are closest to Spanish Trail?',
    answer:
      'Bishop Gorman High School is about 2.2 miles northeast via S. Rainbow Blvd. Faith Lutheran Middle & High School and Durango High School are also a short drive from the 89113 gates.',
  },
  {
    question: 'How long does it take to reach Harry Reid International Airport?',
    answer: `Most residents plan on an approximate 18–25 minute drive to Harry Reid International Airport depending on Tropicana traffic and I-215 conditions—call ${GBP_PHONE_DISPLAY} if you need a showing timed around a flight.`,
  },
  {
    question: 'Can I tour club amenities before I buy?',
    answer: `The golf club is private. Dr. Duffy coordinates guest access with membership staff when you are previewing as a serious buyer or under contract. Start with a home tour at ${GBP_PHONE_DISPLAY}.`,
  },
]

export type AmenityGuideSection = {
  id: string
  title: string
  paragraphs: string[]
}

export const amenityGuideSections: AmenityGuideSection[] = [
  {
    id: 'dining',
    title: 'Dining & cafes near Spanish Trail',
    paragraphs: [
      'Spanish Trail homeowners often dine at the private Spanish Trail Country Club clubhouse, then branch out to Summerlin and Spring Valley for date nights. Downtown Summerlin on Festival Plaza Drive clusters sit-down restaurants and fast-casual options roughly 10–15 minutes north in typical traffic.',
      'Use the map filters for Restaurants and Cafes to see current Google Places results around the 89113 center pin. Dr. Jan Duffy can point you to the spots her clients use after twilight showings—call (702) 766-3299 when you want a neighborhood dinner scout built into your tour day.',
    ],
  },
  {
    id: 'parks-recreation',
    title: 'Parks & recreation',
    paragraphs: [
      'Inside the gates, Spanish Trail Country Club delivers golf, tennis, pickleball, fitness, and resort pools. Outside the gates, Desert Breeze Park on Spring Mountain Road offers fields, paths, and community sports facilities a short drive south.',
      'Red Rock Canyon National Conservation Area is a longer but popular weekend drive west for hiking and scenic loops. Drive times vary with gate exit and weekend traffic.',
    ],
  },
  {
    id: 'golf',
    title: 'Golf at Spanish Trail Country Club',
    paragraphs: [
      'The Robert Trent Jones Jr. layout spans Sunrise, Lakes, and Canyon nines across the 640-acre master plan. Cart-path access and fairway exposure differ by enclave—Dr. Duffy matches golfers to streets that fit how often they play.',
      'Membership is optional for homeowners but unlocks clubhouse dining, tournaments, and wellness programming. The interactive map Golf filter highlights public and private courses near the community center pin at 5050 Spanish Trail Ln.',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & pharmacies',
    paragraphs: [
      'Spring Valley Hospital Medical Center (5400 S Rainbow Blvd) anchors emergency and inpatient care south of Spanish Trail. Summerlin Hospital Medical Center (657 Town Center Dr) serves the northwest valley from Town Center Drive.',
      'Retail pharmacies appear throughout Rainbow, Charleston, and Tropicana corridors—use the Healthcare and Pharmacies filters on the map for current nearby locations.',
    ],
  },
  {
    id: 'shopping-grocery',
    title: 'Grocery & shopping runs',
    paragraphs: [
      'Whole Foods Market at 9420 W Sahara Ave and Trader Joe\'s at 8937 W Charleston Blvd handle weekly grocery runs for many 89113 owners. Downtown Summerlin adds apparel, services, and specialty retail in an open-air center.',
      'Expect roughly 10–15 minutes to those anchors in light traffic; allow extra time during evening rush on Rainbow or Charleston.',
    ],
  },
  {
    id: 'schools',
    title: 'Schools serving Spanish Trail buyers',
    paragraphs: [
      'Private-school buyers track Bishop Gorman High School (5959 S Hualapai Way) about 2.2 miles northeast via S. Rainbow Blvd. Faith Lutheran Middle & High School sits on S. Hualapai Way, and Durango High School serves many CCSD families near Dewey Drive.',
      'School assignments and commute patterns change—verify boundaries with the district and tour campuses during your buying timeline.',
    ],
  },
  {
    id: 'commute',
    title: 'Commute anchors: Strip, airport & Summerlin',
    paragraphs: [
      'Tropicana Avenue connects Spanish Trail to the Las Vegas Strip resort corridor—plan on an approximate 15–20 minute drive to major Strip addresses in typical conditions.',
      'Harry Reid International Airport is commonly 18–25 minutes away depending on I-215 and Tropicana traffic. Downtown Summerlin and the 215 beltway sit north and west for office commutes across the valley.',
    ],
  },
]

export const amenityTrustBlock = {
  headline: 'Your Spanish Trail hyperlocal realtor',
  body: `Dr. Jan Duffy (License S.0197614.LLC) practices exclusively inside Spanish Trail—buyer representation, seller representation, and private tours. Berkshire Hathaway HomeServices Nevada Properties. Call ${GBP_PHONE_DISPLAY} or email DrDuffySells@SpanishTrailHomes.com.`,
  phoneE164: GBP_PHONE_E164,
  phoneDisplay: GBP_PHONE_DISPLAY,
}
