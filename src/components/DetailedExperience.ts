import NGC1320png from "../assets/NGC1320.png"
import relationpng from "../assets/relation.png"
import plrelation from "../assets/PLrelation.png"
import lightcurve from "../assets/lightcurve.png"
import exposure from "../assets/exposure.png"
import curve from "../assets/curve.png"
import first from "../assets/first.png"
import obs from "../assets/IMG_0875.jpeg"


export type DetailedExperience = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  descriptionwithlink?:{
    text: string
    linktext: string
    linkurl: string
    textafter: string
  };
  blurbs?: string;
  equation?: string;
  equation2?: string;
  smallblurb?: string;
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
      "After taking my first astronomy courses concurrently at Evergreen Valley College as a dual enrollment student, I was able to connect my passion for astrophotography with the field of astronomy, and reached out to Dr. Celso Batalha, my astronomy professor. Under his tutelage, I was given the opportunity to do differential photometry at the EVC Observatory. My main role was sharing the workload of gathering data every other night of observing - during which I used my knowledge of astrophotography to learn more about observational astronomy - and to develop a pipeline that takes our exposures as time-series input to give us lightcurves, which we can then compare to the literature. The overall goal was to measure the feasibility of doing research with the observatory, as a proof-of-concept for future students. ",
    blurbs: "The idea behind differential photometry is to use a reference star in the field of our exposures that is constant in magnitude and dose not pulsate. From that, we can determine a zero-point for different sets of exposures, correcting for instrumental pixel count variance across nights and getting the true pulsation of our target star. My pipeline does this differential photometry for a series of exposures, and calculates a light curve using the reference. ",
    equation: "M = -2.5 \\log \\int_{0}^{\\infty} F(\\lambda) d\\lambda + C",
    equation2: "M = -2.5 \\log F_{\\lambda } + C",
    smallblurb: "where C is the zero-point determined from the reference star in the exposure, and F is at the specific wavelength we used in our filter for the second equation. This pipeline was developed for usage by ASTRO-98 students at EVC, to streamline the process and introduce students to basic astronomy research.",
    images: exposure,
    images2: curve,
    imagecaption: "An example of the apertures fitted to both the reference star (left star in left image) and the target star (right star in left image) in one exposure. This is done for a series of exposures, and a light curve is obtained at the end (right image). ",
  },
  {
    title: "RR Lyrae Research", 
    subtitle: "UC Santa Cruz", 
    date: "June 2024 - August 2024",
    description: "This research was conducted under the Science Internship Program at UC Santa Cruz. I worked under Dr. Raja Guhathakurta and Dr. Yuting Feng on their research regarding RR Lyrae in the Milky Way's Stellar Halo - the outermost part of the galaxy. The stars we looked at were incredibly dim (~16 magnitude), so we used Hyper Suprime Cam survey data with an optimal combination of high cadence and photometric depth to obtain our light curves and find periodicity. ", 
    descriptionwithlink: {
      text: "With the derived period, we can use the tight period-luminosity relation RR Lyrae exhibit in the green wavelengths to find their luminosity and thus distance. The broad impact of this research included better mapping of the stellar halo to further investigate its structure and history, as well as proving the value of certain data analysis methods for the then upcoming Vera C. Rubin observatory with even higher cadence and photometric depth.",
      linktext: "This research was published and presented",
      linkurl: "https://ui.adsabs.harvard.edu/abs/2025AAS...24547003K/abstract",
      textafter: "at the American Astronomical Society's 245th winter conference.",
    }, 
    images: plrelation,
    imagecaption: "The period-luminosity-metallicity relation of RR Lyrae in different bands, calibrated with Catalina RRL in DES Y3. This relation makes RR Lyrae precise distance indicators. The g-band was used in this research. (Credits: Stringer et. al). On the right is a folded lightcurve with the period derived from a periodogram and Fourier analysis. From Chi-square analysis we can tell the curve is a good fit to the data. ",
    images2: lightcurve,
  },
  {
    title: "A.R.R.O.W Club", 
    subtitle: "Evergreen Valley College (Dual Enrollment)", 
    date: "February - June 2024", 
    description: "While taking classes at EVC as a dual enrollment student, under the recommendation of Dr. Celso Batalha and Dr. Mike Masuda, I collaborated with a group of students to co-found the A.R.R.O.W. Club (Astronomy, Rocketry, Robotics, and Other Worlds). Our idea was to found a club focused on uniting all STEM disciplines under one collaborative environment, with the goal of creating cool projects and learning from each other. As secretary, my duties involved pitching for funding at campus-wide ASG meetings, taking and maintaining detailed meeting minutes, and leading a team of students with varying, diverse STEM exprience. ",
    images: first,
    images2: obs,
    imagecaption: "The left image shows one of our first meetings, where we launchd a water rocket with 3d printed fins. Some students even gathered flight data! On the left is an observing regime I conducted with another A.R.R.O.W student. We captured OIII data on Messier 57, the Ring Nebula. ",
  },
]