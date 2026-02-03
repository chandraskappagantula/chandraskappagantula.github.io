import { AboutCard } from "./AboutCard";

const abouts = [
    {
        title: "Education", 
        description: "Physics B.S., Cal Poly SLO '29",
        para: "Astronomy & CS minors (planned)",
        link: " "
    },
    {
        title: "Languages + tools", 
        description: "A list of languages and tools I've used/learnt", 
        para: "", 
        tags: ["Python", "Java", "Linux (WSL)", "Arduino C++", "HTML", "CSS", "JS", "Tailwind", "LaTeX"], 
        link: " "
    },
    {
        title: "Location", 
        description: "San Jose + San Luis Obispo, California", 
        para: " ",
        link: " "
    }, 
    {
        title: "Previously", 
        description: "", 
        para: "Click to view previous research + projects", 
        link: "#research"
    },
    {
        title: "Current Focus", 
        description: "Active Galactic Nuclei Research", 
        para: "Using IFU spectropscopy to analyze stellar kinematics", 
        link: " "
    }, 
];

export function AboutSection() {
    return (
        <section id = "about" className = "text-white">
            <div className = "mt-12 grid gap-6 sm:grid-cols-2">
                {abouts.map((about) => (
                    <AboutCard key = {about.title} title = {about.title} description = {about.description} para = {about.para} tags = {about.tags} link = {about.link} />
                )
            )}
            </div>
        </section>
    )
}

