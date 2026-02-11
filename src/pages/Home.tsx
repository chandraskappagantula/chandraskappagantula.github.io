import { Intro } from "../components/Intro.tsx";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectSection";
import { ResearchSection } from "../components/ResearchSection";
import { PublicationSection } from "../components/PublicationSection";
import { AboutSection } from "../AboutSection";

export default function Home() {
  return (
    
    <main className="bg-neutral-900 text-white">

      <Navbar />

      <section id="intro" className="py-32">
        <div className="mx-auto max-w-6xl px-6">
        <Intro />
        </div>
      </section>

      <section id="about" className="py-8">
        <div className = "mx-auto max-w-6xl px-6">
        <h2 className="text-4xl mb-6 flex items-center justify-center">About Me</h2>
        <AboutSection />
        </div>
        
      </section>

      <section id="research" className="py-16 flex items-center">
        <div className = "mx-auto max-w-6xl px-6">
        <h2 className="text-4xl mb-6 flex items-center justify-center">Experience</h2>
        <ResearchSection />
        </div>
      </section>

      <section id="projects" className="py-16 flex items-center">
        <div className = "mx-auto max-w-6xl px-6">
    <h2 className="text-4xl flex justify-center items-center">Projects</h2>
        <p className="text-lg text-gray-400 mt-2 mb-6 flex justify-center items-center">
          Here are some of the projects I've created to help with research,
          solve problems, and further develop my technical skills.
        </p>
        <ProjectsSection />

        </div>

      </section>

      <section id = "publications" className = "py-8">
        <div className = "mx-auto max-w-6xl px-6">
          <h2 className = "text-4xl mb-4 flex items-center justify-center">Publications</h2>
          <PublicationSection />
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className = "mx-auto max-w-6xl px-6">
        <h2 className="text-4xl mb-4 flex items-center justify-center">Contact</h2>
        <p className="text-lg text-gray-400 flex items-center justify-center">
          chandraskappagantula@gmail.com | ckappaga@calpoly.edu
        </p>
        <p className="text-sm text-gray-300 mt-2 flex items-center justify-center">
          Please feel free to reach out to collaborate or chat! Most elements on
          this website are clickable and contain more details.
        </p>
        </div>
      </section>
    </main>
  );
}
