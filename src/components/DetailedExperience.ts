import NGC1320png from "../assets/NGC1320.png"
import relationpng from "../assets/relation.png"

export type DetailedExperience = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  blurbs?: string;
  images?: string;
  imagecaption?: string;
  images2?: string;
  image2caption?: string;
};

export const detailedexperience: DetailedExperience[] = [
    {
    title: "AGN Researcher",
    subtitle: "Cal Poly SLO",
    date: "Sep 2025 – Present",
    description:
      "This research investigates the scaling relations between Supermassive Black Holes (SMBHs) and their relation to their host galaxies. We are focusing on Active Galactic Nuclei (AGN) - galaxies with SMBHs surounded by an energetically efficient accretion disk - and comparing their Black hole Mass and Stellar Velocity Dispersion (Mbh- 𝝈★) relation to that of quiescent (non-AGN) galaxies. ",
    blurbs: "Under Dr. Vardha Bennert, I am investigating the stellar kinematics of 21 megamaser disk galaxies using Integral Field Unit (IFU) spectroscopy from VLT/MUSE & KCWI/KECK. I use absorption lines in the IFU spectra and fit it to stellar templates obtained from the X-Shooter Spectral Library wiht a 30-degree polynomial fit, with the goal of measuring stellar velocity dispersion 𝝈★. The overall goal of this work is to see whether megamasers are offset from the relation, as previous studies have shown, or whether controlling for aperture by using IFU spectra brings the relation into agreement with quiescent galaxies and other AGN. ",
    images: NGC1320png,
    imagecaption: "An example of the results from running scripts to derive stellar velocity dispersion. Blue indicates blue-shift towards us, and red indicates red-shift away from us. The stellar velocity dispersion can be thought of as a standard deviation from the mean for all star velocities observed in the galaxy from doppler broadening. ",
    images2: relationpng,
    image2caption: "The Mbh-𝝈★ relation is shown above in the graph, with comparision lines for the relation in quiescent galaxies vs. AGN. This work investigates whether the offset is real or caused by aperture-induced effects from not using IFU spectra. RM AGN refer to AGNs whose mass is determined from reverberation mapping and calibrated with the virial factor using this relation.(Credit: Bennert et. al)",
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
]