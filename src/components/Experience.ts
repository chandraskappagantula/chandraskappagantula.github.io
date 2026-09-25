export type Experience = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

export const experience: Experience[] = [
  {
    title: "Undergraduate WAVE Research Fellow",
    subtitle: "Caltech",
    date: "Jun 2026 – Aug 2026",
    description:
      "Worked within the CHEX-MATE collaboration at Caltech to develop a querying and scientific data workflow to locate, classify, and mask AGN contamination in Sunyaev-Zeldovich effect maps of 110+ galaxy clusters. Modified an existing MCMC forward-modelling pipeline of the sample of clusters to integrate multidimensional masks into covariance-matrix generation and multiwavelength data analysis. Documented code changes, data products, and details of my work for future pipeline use.",
  },
    {
    title: "Undergraduate Student Researcher; Frost Scholarship",
    subtitle: "Cal Poly SLO",
    date: "Sep 2025 – Present",
    description:
      "Investigating the MBH − σ⋆ relation in megamaser disk galaxies through analysis of Integral Field Unit spectroscopic data; as part of an ongoing research and publication effort, working to refine the black hole mass - stellar velocity dispersion relation using scientific computing methods. Recognized as a Frost Research Scholar ($10k per year minimum), with potential for future external validation. ",
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
    description: "Verified and double checked pulsational parameters already derived for these RR Lyrae candidates with ~20-300 kPc galactocentric distances. Published and presented this research at AAS 245 Winter Conference."
  },
  {
    title: "A.R.R.O.W Club", 
    subtitle: "Evergreen Valley College (Dual Enrollment)", 
    date: "February - June 2024", 
    description: "Secretary, Co-Founder, and team leader of A.R.R.O.W Club, a club focused on uniting stem disciplines under one collaborative environment."
  },
]