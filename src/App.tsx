import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"
import { ProjectsSection } from "./components/ProjectSection"
import { ResearchSection } from "./components/ResearchSection";
import './App.css'
import { AboutSection } from "./AboutSection"

function App() {

  return (
    <main>
      <Navbar />
    <section id = "intro" className=" py-32 flex items-center bg-blue text-white"><Intro /></section>
  
    <section
        id="about"
        className="bg-blue text-white py-16"
      >
        <h2 className="text-4xl">About Me</h2>
        <AboutSection />
      </section>
    <section 
      id = "research"
      className = "bg-blue text-white pt-12 pb-18">
        <h2 className = "text-4xl"> Research Experience </h2>
        <ResearchSection />
        </section>
    <section
        id="projects"
        className="bg-blue text-white p-24"
      >
        <h2 className="text-4xl">Projects</h2>
        ‎ 
        <p className = "text-sm text-gray-400"> Here are some of the projects I've created to help with research and solve problems </p>
        <ProjectsSection />
      </section>

      <section
        id="contact"
        className="bg-blue text-white p-16"
      >
        <h2 className="text-4xl">Contact</h2>
      </section>
    </main>
  )
}

export default App
