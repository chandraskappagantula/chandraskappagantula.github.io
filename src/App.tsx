import { Intro } from "./components/Intro"
import { Navbar } from "./components/Navbar"
import { ProjectsSection } from "./components/ProjectSection"
import './App.css'

function App() {

  return (
    <main>
      <Navbar />
    <section id = "intro" className="min-h-screen flex items-center bg-blue text-white"><Intro /></section>
  
    <section
        id="about"
        className="min-h-screen bg-blue text-white p-16"
      >
        <h2 className="text-4xl">About Me</h2>
        
      </section>
    <section 
      id = "research"
      className = "min-h-screen bg-blue text-white p-16">
        <h2 className = "text-4xl"> Research Experience </h2>
        </section>
    <section
        id="projects"
        className="min-h-screen bg-blue text-white p-16"
      >
        <h2 className="text-4xl">Projects</h2>
        <ProjectsSection />
      </section>

      <section
        id="contact"
        className="min-h-screen bg-blue text-white p-16"
      >
        <h2 className="text-4xl">Contact</h2>
      </section>
    </main>
  )
}

export default App
