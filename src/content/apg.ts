// All landing page copy, taken from the APG Solutions Figma design.
// The phone number and email are placeholders from the design.

export const site = {
  name: "APG Solutions",
  legalName: "APG Solutions Inc.",
  phone: "(800) 555-0142",
  phoneHref: "tel:+18005550142",
  email: "hello@apgsolutions.com",
  hours: "Mon–Fri, 8am–6pm CT",
  tagline: "Connecting talent. Driving success.",
};

export const navLinks = [
  { label: "For Carriers", href: "#carriers" },
  { label: "For Drivers", href: "#drivers" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  badge: "Nationwide CDL-A recruiting · All 48 states",
  badgeShort: "Nationwide CDL-A recruiting",
  title: "Only pay when we put a ",
  titleAccent: "driver in your seat.",
  lead: "APG Solutions connects carriers with pre-screened, road-ready CDL drivers. No retainers, no monthly fees — just qualified drivers who show up and stay.",
  leadShort: "APG Solutions connects carriers with pre-screened, road-ready CDL drivers. No retainers, no monthly fees.",
  trust: ["$0 upfront", "No long contracts", "Retention-based payments"],
};

export const stats = [
  { value: "2,500+", label: "CDL drivers placed", labelShort: "Drivers placed" },
  { value: "48", label: "States covered nationwide", labelShort: "States covered" },
  { value: "72 hrs", label: "Avg. time to first candidate", labelShort: "To first candidate" },
  { value: "$0", label: "Upfront or monthly retainer", labelShort: "Upfront retainer" },
];

export const problem = {
  eyebrow: "The problem",
  title: "Empty seats cost you every single day.",
  lead: "Every parked truck is lost revenue. Traditional recruiters charge you whether they deliver or not — we don’t.",
  pains: [
    {
      title: "Idle trucks",
      text: "Unseated trucks burn hundreds of dollars a day in lost loads and fixed costs.",
      icon: { src: "/apg/pain-idle-trucks.svg", w: 22.1833, h: 22 },
    },
    {
      title: "Unqualified applicants",
      text: "Stacks of resumes that don’t meet your experience, MVR or equipment needs.",
      icon: { src: "/apg/pain-unqualified.svg", w: 22, h: 22 },
    },
    {
      title: "Expensive retainers",
      text: "Monthly fees that keep billing long after the results stop coming in.",
      icon: { src: "/apg/pain-retainers.svg", w: 22, h: 22.3667 },
    },
    {
      title: "Constant turnover",
      text: "Drivers who quit in week two — and you’ve already paid for the hire.",
      icon: { src: "/apg/pain-turnover.svg", w: 22, h: 22 },
    },
  ],
};

export const twoSides = {
  eyebrow: "Two sides. One right match.",
  title: "Built for carriers and drivers.",
  lead: "We match on what actually matters — route, home time, equipment and pay — so both sides win.",
  carriers: {
    eyebrow: "For Carriers",
    title: "Fill seats with drivers who stay.",
    text: "Tap into a nationwide pool of verified CDL-A drivers, pre-screened to your exact hiring criteria.",
    items: ["MVR, PSP & experience pre-screened", "You interview and make the final call", "Pay only after the driver starts"],
    cta: "Find Drivers →",
  },
  drivers: {
    eyebrow: "For Drivers",
    title: "Find the road that fits you.",
    text: "One short application. We bring you jobs that match your lanes, home time and pay goals — 100% free.",
    items: ["Never pay a cent to apply", "Clear pay, route & equipment upfront", "Real recruiters, not job-board spam"],
    cta: "Apply to Drive →",
  },
};

export const benefits = {
  eyebrow: "Why APG Solutions",
  title: "Pay-per-driver, done right.",
  lead: "A recruiting partner that only wins when you do.",
  items: [
    { title: "Performance-based", text: "No placement, no invoice. Our incentives are 100% aligned with yours.", icon: { src: "/apg/icon-pulse.svg", w: 26, h: 26 } },
    { title: "Pre-screened drivers", text: "Every candidate is checked for CDL class, experience, MVR and equipment fit.", icon: { src: "/apg/icon-shield.svg", w: 26, h: 26 } },
    { title: "Retention-based payments", text: "Fees are split across milestones, so you’re protected if a driver doesn’t stay.", icon: { src: "/apg/icon-repeat.svg", w: 26, h: 26.0333 } },
    { title: "Fast turnaround", text: "First qualified candidates typically land in your inbox within 72 hours.", icon: { src: "/apg/icon-clock.svg", w: 26, h: 26 } },
    { title: "No long contracts", text: "Scale up or pause anytime. No minimums, no lock-in, no surprises.", icon: { src: "/apg/icon-lock.svg", w: 26, h: 26 } },
    { title: "Dedicated recruiter", text: "One point of contact who learns your fleet, lanes and culture.", icon: { src: "/apg/icon-users.svg", w: 26.0333, h: 26 } },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From empty seat to driver hired.",
  lead: "Four simple steps. You stay in control the whole way.",
  steps: [
    { title: "Tell us your needs", text: "Share lanes, equipment, pay and hiring criteria in a quick carrier review." },
    { title: "We source & screen", text: "Our recruiters search our nationwide network and vet every candidate." },
    { title: "You interview & decide", text: "Talk with qualified drivers and hire only the ones you want." },
    { title: "Pay as they stay", text: "Flat fee per placement, tied to retention milestones you agree on upfront." },
  ],
};

export const pricing = {
  eyebrow: "Simple pricing",
  title: "One flat fee per driver placed.",
  lead: "No retainers. No monthly minimums. You only pay when a qualified driver starts working for you.",
  compare: [
    { yes: true, text: "APG: pay only after the driver starts" },
    { yes: false, text: "Others: $3,000+/mo retainer, results not guaranteed" },
  ],
  card: {
    pill: "Pay per hire",
    price: "Flat fee",
    unit: "/ driver",
    note: "Custom quote based on driver type & volume",
    includes: [
      "Billed only when the driver starts",
      "Retention milestones agreed before onboarding",
      "No monthly minimums or contracts",
      "Dedicated recruiter included",
    ],
    cta: "Get My Quote →",
  },
};

export const driverTypes = {
  eyebrow: "Driver types",
  title: "Drivers we recruit for.",
  lead: "From OTR to local, dry van to hazmat — we cover every corner of the road.",
  types: [
    "OTR / Long Haul",
    "Regional",
    "Local / Home Daily",
    "Dry Van",
    "Reefer",
    "Flatbed",
    "Tanker",
    "Hazmat",
    "Team Drivers",
    "Owner Operators",
    "Dedicated Lanes",
    "Car Hauler",
    "Intermodal",
    "Box Truck / CDL-B",
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions? We’ve got answers.",
  lead: "Can’t find what you’re looking for? Our team is one call away.",
  cta: "Talk to a Recruiter",
  items: [
    {
      q: "How does pay-per-driver recruiting work?",
      a: "You tell us who you need, we source and screen candidates, and you only pay a flat fee once a driver you’ve hired actually starts.",
    },
    {
      q: "What if a driver doesn’t stay?",
      a: "Fees are tied to retention milestones agreed upfront, so you’re protected if a placement doesn’t work out.",
    },
    { q: "Who makes the final hiring decision?", a: "You do. We present qualified candidates — you interview and decide." },
    { q: "Is it really free for drivers?", a: "Yes. Drivers never pay to apply or get placed. Carriers cover the recruiting fee." },
    { q: "How fast can I get candidates?", a: "Most carriers receive their first qualified candidates within 72 hours." },
    { q: "Which states do you cover?", a: "We recruit CDL drivers across all 48 contiguous states." },
  ],
};

export const cta = {
  title: "Ready to fill your empty seats?",
  lead: "Start your free carrier review today — no commitment required.",
  leadShort: "Free carrier review — no commitment.",
  checks: ["Free carrier review — no commitment", "Candidates in your inbox within 72 hours", "Pay only when a driver starts"],
  form: {
    title: "Get matched in 48 hours",
    lead: "Tell us who you are — it takes under 2 minutes.",
    privacy: "Your information is never shared or sold.",
  },
};

export const footer = {
  blurb: "Connecting talent. Driving success. Nationwide CDL driver recruiting for carriers of every size.",
  blurbShort: "Connecting talent. Driving success. Nationwide CDL driver recruiting.",
  columns: [
    {
      title: "Carriers",
      links: [
        { label: "Find Drivers", href: "#get-started" },
        { label: "Pricing", href: "#pricing" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Carrier Review", href: "#get-started", desktopOnly: true },
      ],
    },
    {
      title: "Drivers",
      links: [
        { label: "Apply Now", href: "#apply" },
        { label: "Driver Jobs", href: "#drivers" },
        { label: "Why It’s Free", href: "#faq", desktopOnly: true },
        { label: "Resources", href: "#faq" },
      ],
    },
    {
      title: "Company",
      desktopOnly: true,
      links: [
        { label: "About Us", href: "#carriers" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#get-started" },
        { label: "Careers", href: "#get-started" },
      ],
    },
  ],
};
