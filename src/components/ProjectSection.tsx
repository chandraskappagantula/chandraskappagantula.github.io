import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        title: "Differential Photometry Pipeline", 
        description: "A pipeline created for the ASTR-098 research course. Automatically takes a series of exposures as time-series data and returns a light-curve. ",
        tags: ["Python", "SIRIL", "astropy", "Differential Photometry"], 
        link: "https://github.com/chandraskappagantula/PhotometryPipelineEVCResearchCourse",
    },
    {
        title: "RR Lyrae Photometry", 
        description: "Created for UC Santa Cruz research done under Drs. Yuting Feng and Raja Guhathakurta. Analyzes HSC sky survey exposures and returns a light-curve and periodicity using a periodogram. ", 
        tags: ["Python", "Photometry", "astropy", "gatspy", "Linux"], 
        link: "https://github.com/chandraskappagantula/Photometry_RRLyrae"
    }, 
    {
        
        title: "Calendar App", 
        description: "A proof-of-concept calendar app created with Python and Tkinter with functional event managent, productivity assistant, and partial spotify integration.", 
        tags: ["Python", "Tkinter"],
        link: "https://github.com/chandraskappagantula/CalendarAppTkinter"
    },
    {
        title: "Personal Website", 
        description: "Created a website to showcase my research and projects, and additionally to practice my Git and web development skills. (inception much?)", 
        tags: ["TypeScript", "Tailwind", "HTML/CSS/JS Web Dev", "Git"],
        link: "https://github.com/chandraskappagantula/chandraskappagantula.github.io"
    },
    {
        title: "TESS Data Analysis Experiment",
        description: "Used TESS modules and implementations I learnt at a workshop during AAS 245; gathered data for eclipsing binaries and various types of pulsating stars with TESSCut and lightkurve. (work in progress)",
        tags: ["Python", "Jupyter", "Linux", "TESS"],
        link: "https://docs.google.com/presentation/d/1uYV-6o0R9NnwkwZxA-n-1VWPFp6HE1byQ3VMONe9dvU/edit?slide=id.p#slide=id.p"
    }
];

export function ProjectsSection() {
    return (
        <section id = "projects" className = "text-white">
            <div className="max-w-6xl px-6 py-3">
        

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div className = "last:md:col-span-2 last:md:max-w-xl last:md:mx-auto">
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link = {project.link}
            />
            </div>
          ))}
        </div>
        
      </div>
      
        </section>
        
    )
}