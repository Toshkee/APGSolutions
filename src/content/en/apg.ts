// All English landing page copy, taken from the APG Solutions Figma design.
// content/es/apg.ts has the same keys in Spanish: change both when the copy changes.
// Phone number and email are in content/site.ts. Links are written as English paths; the components add "/es".

export const meta = {
  title: "APG Solutions | Pay-Per-Driver CDL Recruiting",
  description:
    "Only pay when we put a driver in your seat. Pre-screened, road-ready CDL drivers for carriers nationwide. No retainers, no monthly fees.",
  // Share preview image (1200×630) in public/share. The Spanish one is made by scripts/make-share-image.py
  shareImage: "/share/og-en.jpg",
  shareImageAlt: "APG Solutions: only pay when we put a driver in your seat. Pay-per-driver CDL recruiting from Nashville, TN.",
};

export const hours: string = "Mon–Fri, 8am–6pm CT";

// Home sections are linked as "/#id" so they also work from other pages
export const navLinks = [
  // One link for the carriers/drivers section: both cards sit side by side there
  { label: "Carriers & Drivers", href: "/#solutions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export const nav = {
  homeLabel: "APG Solutions home",
  mainLabel: "Main",
  mobileLabel: "Mobile",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  getStarted: "Get Started",
  // Switch to the other language, written in that language so people who need it can read it
  switchLabel: "Español",
  switchShort: "ES",
  switchAria: "Ver el sitio en español",
};

export const hero = {
  badge: "Nashville, TN · CDL-A recruiting in all 48 states",
  badgeShort: "Nashville, TN · Hiring nationwide",
  title: "Only pay when we put a ",
  titleAccent: "driver in your seat.",
  lead: "APG Solutions connects carriers with pre-screened, road-ready CDL drivers. No retainers, no monthly fees — just qualified drivers who show up and stay.",
  leadShort: "APG Solutions connects carriers with pre-screened, road-ready CDL drivers. No retainers, no monthly fees.",
  trust: ["$0 upfront", "No long contracts", "Retention-based payments"],
  ctaCarrier: "Find Drivers →",
  ctaDriver: "I'm a Driver — Apply",
};

export const stats = {
  label: "APG Solutions in numbers",
  items: [
    { value: "2,500+", label: "CDL drivers placed", labelShort: "Drivers placed" },
    { value: "48", label: "States covered nationwide", labelShort: "States covered" },
    { value: "72 hrs", label: "Avg. time to first candidate", labelShort: "To first candidate" },
    { value: "$0", label: "Upfront or monthly retainer", labelShort: "Upfront retainer" },
  ],
};

// Pain icons are set in components/apg/Problem.tsx, in this order
export const problem = {
  title: "Empty seats cost you every single day.",
  lead: "Every parked truck is lost revenue. Traditional recruiters charge you whether they deliver or not — we don’t.",
  pains: [
    { title: "Idle trucks", text: "Unseated trucks burn hundreds of dollars a day in lost loads and fixed costs." },
    { title: "Unqualified applicants", text: "Stacks of resumes that don’t meet your experience, MVR or equipment needs." },
    { title: "Expensive retainers", text: "Monthly fees that keep billing long after the results stop coming in." },
    { title: "Constant turnover", text: "Drivers who quit in week two — and you’ve already paid for the hire." },
  ],
};

export const twoSides = {
  title: "Built for carriers and drivers.",
  lead: "We match on what actually matters — route, home time, equipment and pay — so both sides win.",
  carriers: {
    title: "Fill seats with drivers who stay.",
    text: "Tap into a nationwide pool of verified CDL-A drivers, pre-screened to your exact hiring criteria.",
    items: ["MVR, PSP & experience pre-screened", "You interview and make the final call", "Pay only after the driver starts"],
    cta: "Find Drivers →",
    photoAlt: "Black semi-truck on a highway",
  },
  drivers: {
    title: "Find the road that fits you.",
    text: "One short application. We bring you jobs that match your lanes, home time and pay goals — 100% free.",
    items: ["Never pay a cent to apply", "Clear pay, route & equipment upfront", "Real recruiters, not job-board spam"],
    cta: "Apply to Drive →",
    photoAlt: "Truck driver standing next to his red semi-truck",
  },
};

// Animated icons are set in components/apg/Benefits.tsx, in this order
export const benefits = {
  title: "Pay-per-driver, done right.",
  lead: "A recruiting partner that only wins when you do.",
  items: [
    { title: "Performance-based", text: "No placement, no invoice. Our incentives are 100% aligned with yours." },
    { title: "Pre-screened drivers", text: "Every candidate is checked for CDL class, experience, MVR and equipment fit." },
    { title: "Retention-based payments", text: "Fees are split across milestones, so you’re protected if a driver doesn’t stay." },
    { title: "Fast turnaround", text: "First qualified candidates typically land in your inbox within 72 hours." },
    { title: "No long contracts", text: "Scale up or pause anytime. No minimums, no lock-in, no surprises." },
    { title: "Dedicated recruiter", text: "One point of contact who learns your fleet, lanes and culture." },
  ],
};

export const howItWorks = {
  title: "From empty seat to driver hired.",
  lead: "Four simple steps. You stay in control the whole way.",
  steps: [
    { title: "Tell us your needs", text: "Share lanes, equipment, pay and hiring criteria in a quick carrier review." },
    { title: "We source & screen", text: "Our recruiters search our nationwide network and vet every candidate." },
    { title: "You interview & decide", text: "Talk with qualified drivers and hire only the ones you want." },
    { title: "Pay as they stay", text: "Flat fee per placement, tied to retention milestones you agree on upfront." },
  ],
};

// US coverage map section (between Benefits and Pricing)
export const coverage = {
  title: "Drivers for every lane, in all 48 states.",
  lead: "Our recruiters work out of Nashville and find CDL-A drivers coast to coast, wherever your trucks run.",
};

export const pricing = {
  title: "One flat fee per driver placed.",
  lead: "No retainers. No monthly minimums. You only pay when a qualified driver starts working for you.",
  // APG vs retainer recruiters. Every claim here is already made elsewhere on the page.
  compare: {
    them: "Retainer recruiters",
    us: "APG",
    rows: [
      { label: "Upfront cost", them: "$3,000+/mo retainer", us: "$0" },
      { label: "You pay", them: "Whether they deliver or not", us: "Only when a driver starts" },
      { label: "Contract", them: "Long-term lock-in", us: "None, pause anytime" },
      { label: "If a driver quits", them: "You already paid", us: "Covered by retention milestones" },
      { label: "Candidates", them: "Stacks of resumes", us: "MVR, PSP & experience pre-screened" },
    ],
  },
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

// Select options keep English values so the lead email reads the same whatever language the form was filled in
export const cta = {
  title: "Ready to fill your empty seats?",
  lead: "Start your free carrier review today — no commitment required.",
  leadShort: "Free carrier review — no commitment.",
  checks: ["Free carrier review — no commitment", "Candidates in your inbox within 72 hours", "Pay only when a driver starts"],
  call: "Prefer to talk? Call",
  form: {
    title: "Get matched in 48 hours",
    lead: "Tell us who you are — it takes under 2 minutes.",
    // Driver details do go to matching carriers, so the note only promises "never sold" (see /privacy)
    privacy: "Your information is never sold.",
    privacyLink: "Privacy Policy",
    tabsLabel: "I am",
    tabCarrier: "I'm hiring drivers",
    tabDriver: "I'm a driver",
    done: "You’re all set.",
    sending: "Sending…",
    // the no-break space keeps the arrow on the same line as the last word
    submitCarrier: "Check My Carrier's Fit →",
    submitDriver: "Apply to Drive →",
    fields: {
      company: { label: "Company name", placeholder: "e.g. Midwest Freight LLC" },
      usdot: { label: "USDOT / MC #", placeholder: "1234567" },
      driversNeeded: { label: "Drivers needed", placeholder: "1 – 5" },
      workEmail: { label: "Work email", placeholder: "you@company.com" },
      name: { label: "Full name", placeholder: "e.g. John Smith" },
      phone: { label: "Phone", placeholder: "(555) 123-4567" },
      experience: {
        label: "CDL-A experience",
        placeholder: "Select",
        options: [
          { value: "Less than 1 year", label: "Less than 1 year" },
          { value: "1 – 2 years", label: "1 – 2 years" },
          { value: "3 – 5 years", label: "3 – 5 years" },
          { value: "5+ years", label: "5+ years" },
        ],
      },
      email: { label: "Email", placeholder: "you@email.com" },
    },
  },
};

// Replies from the form's server action (src/app/actions.ts)
export const formMessages = {
  required: {
    company: "Please enter your company name.",
    email: "Please enter your email.",
    workEmail: "Please enter your work email.",
    name: "Please enter your full name.",
    phone: "Please enter your phone.",
  },
  invalidEmail: "Please enter a valid email address.",
  checkFields: "Please check the highlighted fields.",
  unavailable: "Sorry, the form is unavailable right now. Please call us.",
  failed: "Sorry, something went wrong. Please try again or call us.",
  thanks: "Thanks! We’ll be in touch shortly.",
  successCarrier: "Thanks! A recruiter will review your fit and reach out within one business day.",
  successDriver: "Thanks for applying! A recruiter will call you about jobs that match.",
};

export const mobileCta = {
  findDrivers: "Find Drivers →",
  call: "Call",
};

export const footer = {
  blurb: "Connecting talent. Driving success. Nationwide CDL driver recruiting for carriers of every size.",
  blurbShort: "Connecting talent. Driving success. Nationwide CDL driver recruiting.",
  columns: [
    {
      title: "Carriers",
      links: [
        { label: "Find Drivers", href: "/#get-started" },
        { label: "Pricing", href: "/#pricing" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Carrier Review", href: "/#get-started", desktopOnly: true },
      ],
    },
    {
      title: "Drivers",
      links: [
        { label: "Apply Now", href: "/#apply" },
        { label: "Driver Jobs", href: "/#drivers" },
        { label: "Why It’s Free", href: "/#faq", desktopOnly: true },
        { label: "Resources", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      desktopOnly: true,
      links: [
        { label: "About Us", href: "/about" },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: "/#get-started" },
        { label: "Our Team", href: "/about#team" },
      ],
    },
  ],
  homeLabel: "APG Solutions home",
  contact: "Contact",
  rights: "All rights reserved.",
  privacyShort: "Privacy",
  termsShort: "Terms",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

// PLACEHOLDER team: names, roles and bios are made up for the prototype. Swap in the real people
// (and add `photo: "/team/name.jpg"`) when the client sends them.
export const team = {
  title: "Meet the team.",
  lead: "Real recruiters in Nashville who pick up the phone, not a call center.",
  previewCta: "More about APG →",
  members: [
    { name: "Jordan Hayes", role: "Founder & CEO", bio: "Spent a decade on the carrier side before starting APG to fix how drivers get hired." },
    { name: "Marcus Reed", role: "Head of Recruiting", bio: "Runs the recruiting desk and knows what makes a driver stay past week two." },
    { name: "Alicia Moore", role: "Carrier Success Manager", bio: "Your main contact: learns your lanes, equipment and hiring criteria." },
    { name: "Tyler Brooks", role: "Senior Driver Recruiter", bio: "Talks with drivers every day and matches them to jobs that fit their home time." },
  ] as { name: string; role: string; bio: string; photo?: string }[],
};

// 404 page
export const notFound = {
  metaTitle: "Page Not Found",
  badge: "404 · Page not found",
  title: "Wrong turn.",
  lead: "This page doesn’t exist or has moved. Let’s get you back on the road.",
  home: "Back to Home",
  cta: "Find Drivers →",
};

// PLACEHOLDER copy for the About page until the client sends their own
export const about = {
  metaTitle: "About Us",
  metaDescription:
    "APG Solutions is a Nashville, TN CDL recruiting company. We help carriers in all 48 states hire pre-screened drivers and only get paid when a driver starts.",
  badge: "About APG Solutions",
  title: "Nashville-built. ",
  titleAccent: "Driver-first.",
  lead: "APG Solutions is a CDL recruiting company based in Nashville, Tennessee. We help carriers in all 48 states fill their trucks with pre-screened drivers, and we only get paid when a driver starts.",
  story: {
    title: "Recruiting that works the way trucking does.",
    paragraphs: [
      "We started APG Solutions after watching carriers pay big retainers to recruiters who never filled a seat. Trucking runs on results, so our pricing does too: one flat fee per driver, tied to how long they stay.",
      "Our team works out of Nashville and talks with drivers every day. We learn your lanes, equipment and culture, then send you people who fit, not a stack of resumes.",
    ],
  },
  photoAlt: "Semi-truck driving on a highway at dusk",
};
