import { TimelineItem } from "./TimelineItem";

type TimelineEntry = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

const timeline: TimelineEntry[] = [
  {
    title: "AGN Researcher",
    subtitle: "Cal Poly SLO",
    date: "Sep 2025 – Present",
    description:
      "Analyzing stellar kinematics of megamaser disk galaxies using Keck IFU spectroscopy.",
  },
  {
    title: "Photometry & Observing @ EVC Observatory",
    subtitle: "Evergreen Valley College (Dual Enrollment)",
    date: "March 2024 - December 2025",
    description:
      "Used APT photometry software and Python modules like astropy, photutils, and numpy to create a differential photometry pipeline for usage in ASTRO-98 astronomy research course, streamlining the process for future student use.",
  },
  {
    title: "RR Lyrae Research", 
    subtitle: "UC Santa Cruz", 
    date: "June 2024 - August 2024",
    description: "Verified and double checked pulsational parameters already derived for these RR Lyrae candidates with ~20-300 kPc galactocentric distances. Discovered a beat period candidate, challenging an NGVS measurement, in addition to confirming  measurements for other candidates."
  },
  {
    title: "A.R.R.O.W Club", 
    subtitle: "Evergreen Valley College (Dual Enrollment)", 
    date: "February - June 2024", 
    description: "Secretary, Co-Founder, and team leader of A.R.R.O.W Club, a club focused on uniting stem disciplines under one collaborative environment."
  },
];

export function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto mt-16">

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-400 to-blue-400" />

      <div className="space-y-20">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
