import { Intro } from "./components/Intro"
import './App.css'

function App() {

  return (
    <main>
    <section id = "intro" className="min-h-screen flex items-center bg-black text-white"><Intro /></section>
    <section
        id="projects"
        className="min-h-screen bg-gray-900 text-white p-16"
      >
        <h2 className="text-4xl">Projects</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-black text-white p-16"
      >
        <h2 className="text-4xl">Contact</h2>
      </section>
    </main>
  )
}

export default App
