// All site content lives here. Replace placeholders with the client's real details.

export const site = {
  name: "Easy Motion Recruiting",
  city: "Nashville, Tennessee",
  phone: "(615) 000-0000", // placeholder
  phoneHref: "tel:+16150000000", // placeholder
  email: "info@easymotionrecruiting.com", // placeholder
  hours: "Mon – Fri, 8 AM – 5 PM CT",
};

export const nav = [
  { label: "About Us", href: "#about" },
  { label: "Meet the Team", href: "#team" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
] as const;

export type ServiceIcon = "truck" | "shield" | "driver";

export const services: { title: string; text: string; icon: ServiceIcon }[] = [
  {
    title: "Driver Placement",
    text: "CDL-A and CDL-B drivers for OTR, regional and local routes. You meet the drivers, you make the call.",
    icon: "truck",
  },
  {
    title: "Driver Screening",
    text: "Every candidate is checked before you see them: MVR, FMCSA Clearinghouse, DOT medical card and work history.",
    icon: "shield",
  },
  {
    title: "Jobs for Drivers",
    text: "Free for drivers. Clear pay, clear home time, and a recruiter who tells you the truth about the job.",
    icon: "driver",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  office: string;
  phone: string;
  photo?: string; // path in /public, e.g. "/team/jane-doe.jpg"
};

// Placeholder team until the client sends real names and photos
export const team: TeamMember[] = [
  { name: "Full Name", role: "Founder & CEO", office: "Nashville, TN", phone: "(615) 000-0000" },
  { name: "Full Name", role: "Recruiting Manager", office: "Nashville, TN", phone: "(615) 000-0000" },
  { name: "Full Name", role: "Driver Recruiter", office: "Nashville, TN", phone: "(615) 000-0000" },
  { name: "Full Name", role: "Carrier Relations", office: "Nashville, TN", phone: "(615) 000-0000" },
];
