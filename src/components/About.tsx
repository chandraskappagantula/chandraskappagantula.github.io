import { GraduationCap, MapPin, Telescope, Code } from 'lucide-react';

const About = () => {
  const skills = {
    languages: ['Python', 'Java', 'Linux/Unix (WSL)', 'Arduino C++', 'HTML/CSS/JS', 'LaTeX'],
    tools: ['Astropy', 'NumPy', 'SciPy', 'PyRAF', 'AstroML', 'Git'],
  };

  return (
    <section id="about" className="py-24 px-4 section-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Exploring the Universe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the pulsations of RR Lyrae stars to the energetic hearts of distant galaxies, 
            I'm passionate about unraveling cosmic mysteries through observation and computation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio section */}
          <div className="space-y-6">
            <div className="card-gradient rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Education</h3>
                  <p className="text-foreground">Physics B.S. at Cal Poly SLO</p>
                  <p className="text-muted-foreground text-sm">Astronomy & Computer Science Minors (planned)</p>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Location</h3>
                  <p className="text-foreground">San Jose, California</p>
                  <p className="text-muted-foreground text-sm">Originally from the Bay Area</p>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cosmic/10 text-cosmic">
                  <Telescope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Current Focus</h3>
                  <p className="text-foreground">Active Galactic Nuclei Research</p>
                  <p className="text-muted-foreground text-sm">IFU spectroscopy of megamaser disk galaxies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6">
            <div className="card-gradient rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Programming Languages</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Telescope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Tools & Libraries</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <div className="card-gradient rounded-xl p-6 border-l-4 border-primary">
              <p className="text-muted-foreground italic">
                "I also co-founded the A.R.R.O.W. Club (Astronomy, Rocketry, Robotics, and Other Worlds) 
                to create a collaborative environment for STEM students to learn and build together."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
