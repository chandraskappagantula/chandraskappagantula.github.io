import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        title: "Differential Photometry Pipeline", 
        description: "A pipeline created for the ASTR-098 research course. Automatically takes a series of exposures as time-series data and returns a light-curve and time-series analysis.",
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
        title: "Personal Website", 
        description: "Created a website to showcase my research and projects (inception much?)", 
        tags: ["TypeScript", "Tailwind", "HTML/CSS/JS Web Dev", "Git"],
        link: "https://github.com/chandraskappagantula/chandraskappagantula.github.io"
    },
    {
        title: "Calendar App", 
        description: "A proof-of-concept calendar app created with Python and Tkinter with functional event managent, productivity assistant, and partial spotify integration.", 
        tags: ["Python", "Tkinter"],
        link: "https://github.com/chandraskappagantula/CalendarAppTkinter"
    }
];

export function ProjectsSection() {
    return (
        <section id = "projects" className = "min-h-screen text-white">
            <div className="max-w-6xl mx-auto px-6 py-3">
        

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link = {project.link}
            />
          ))}
        </div>
      </div>
        </section>
    )
}