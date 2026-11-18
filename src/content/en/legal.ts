// DRAFT legal copy for the prototype, written from what the site actually collects (see src/app/actions.ts).
// The client (ideally with a lawyer) must review both before launch. content/es/legal.ts is the Spanish version.

import { site } from "../site";
import { hours } from "./apg";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type LegalDoc = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  // Full line under the title, date included
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

const UPDATED = "Last updated November 16, 2026";

const contactSection: LegalSection = {
  heading: "Contact us",
  paragraphs: [
    `${site.legalName}, Nashville, Tennessee`,
    `Email: ${site.email}`,
    `Phone: ${site.phone} (${hours})`,
  ],
};

export const privacy: LegalDoc = {
  metaTitle: "Privacy Policy",
  metaDescription: `How ${site.name} collects, uses and protects the information carriers and drivers share with us.`,
  title: "Privacy Policy",
  updated: UPDATED,
  intro: [
    `${site.legalName} (“APG”, “we”, “us”) is a CDL driver recruiting company based in Nashville, Tennessee. This policy explains what information we collect through this website, how we use it and who we share it with.`,
  ],
  sections: [
    {
      heading: "Information we collect",
      paragraphs: ["We only collect what you choose to give us, plus basic technical data needed to run the site."],
      list: [
        "Carriers: company name, USDOT or MC number, number of drivers needed and work email.",
        "Drivers: full name, phone number, CDL-A experience and email.",
        "Anything else you tell us when you call, text or email us.",
        "Technical data our hosting provider records automatically, such as IP address, browser type and pages visited, used for security and to keep the site working.",
      ],
      after: ["We do not use advertising cookies or third-party tracking on this website."],
    },
    {
      heading: "How we use your information",
      list: [
        "To reply to your request and talk with you about hiring or driving jobs.",
        "To match drivers with carrier jobs that fit their experience, routes and home-time needs.",
        "To screen candidates. Background reports such as MVR or PSP are only requested with your separate written permission.",
        "To run, secure and improve this website.",
        "To meet legal obligations.",
      ],
    },
    {
      heading: "How we share your information",
      list: [
        "Drivers: we share your profile with carriers whose jobs you are a match for, so they can contact and interview you. We do this only as part of finding you a job.",
        "Carriers: we share your company name and job details with drivers we present to you.",
        "Service providers: companies that host this website and deliver our email process data for us and may not use it for anything else.",
        "Legal reasons: when required by law, or to protect our rights, our users or the public.",
      ],
      after: ["We never sell your personal information or share it for advertising."],
    },
    {
      heading: "Calls, texts and email",
      paragraphs: [
        "When you submit a form, you agree that APG may contact you by phone, text message or email about your request or about jobs and candidates that match it. Message and data rates may apply. You can reply STOP to any text to opt out, or ask us to stop calling or emailing at any time. Agreeing to be contacted is not a condition of using our service.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep your information while we are actively working with you and for a reasonable time afterward, in case a new job or candidate becomes a fit. You can ask us to delete it sooner.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reasonable safeguards to protect your information, including encrypted connections (HTTPS). No system is completely secure, so please do not send sensitive details such as your Social Security number through the website forms.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us to see, correct or delete the information we hold about you, or to stop contacting you. Email or call us using the details below and we will respond within a reasonable time.",
      ],
    },
    {
      heading: "Children",
      paragraphs: ["This website is for carriers and adult drivers. We do not knowingly collect information from anyone under 18."],
    },
    {
      heading: "Changes to this policy",
      paragraphs: ["We may update this policy from time to time. The date at the top shows when it last changed."],
    },
    contactSection,
  ],
};

export const terms: LegalDoc = {
  metaTitle: "Terms of Service",
  metaDescription: `The terms for using the ${site.name} website and recruiting service.`,
  title: "Terms of Service",
  updated: UPDATED,
  intro: [
    `These terms apply to your use of the ${site.legalName} (“APG”, “we”, “us”) website. By using the site or submitting a form, you agree to them. If you do not agree, please do not use the site.`,
  ],
  sections: [
    {
      heading: "Our service",
      paragraphs: [
        "APG is a recruiting service that connects motor carriers with CDL drivers. We are not the employer of the drivers we present. Each carrier makes its own hiring decisions and sets its own pay, benefits and employment terms.",
      ],
    },
    {
      heading: "For drivers",
      list: [
        "Our service is free for drivers. You will never pay APG to apply or to be placed.",
        "We cannot guarantee that you will be offered a job or hired.",
        "Carriers may run their own checks, such as MVR, PSP, drug testing and road tests, before hiring.",
      ],
    },
    {
      heading: "For carriers",
      list: [
        "Placement fees and retention milestones are set out in a separate written agreement before we start recruiting for you. That agreement controls if it differs from anything on this website.",
        "Figures on this site, such as time to first candidate, are typical results, not guarantees.",
        "You are responsible for your own hiring decisions and for meeting DOT and employment law requirements.",
      ],
    },
    {
      heading: "Information you give us",
      paragraphs: [
        "Please give us accurate, up-to-date information and only submit information you are allowed to share. How we handle it is described in our Privacy Policy.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: ["You agree not to:"],
      list: [
        "Submit false information or apply on someone else’s behalf without their permission.",
        "Copy, scrape or resell content or data from this site.",
        "Try to break, overload or gain unauthorized access to the site.",
      ],
    },
    {
      heading: "Our content",
      paragraphs: [
        "The text, design, logos and graphics on this site belong to APG or its licensors. You may view and share pages for personal or business use, but not copy them for another website or service.",
      ],
    },
    {
      heading: "Disclaimer",
      paragraphs: [
        "The website is provided “as is”. We work to keep it accurate and available, but we do not promise that it will always be error-free or online.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent allowed by law, APG is not liable for indirect, incidental or consequential damages arising from your use of this website. Our responsibilities to carriers are set out in their written agreement with us.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the State of Tennessee. Any dispute will be handled in the state or federal courts located in Davidson County, Tennessee.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: ["We may update these terms from time to time. The date at the top shows when they last changed."],
    },
    contactSection,
  ],
};
