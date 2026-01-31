import { Github, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'PhotometryPipelineEVCResearchCourse',
      description: 'A pipeline to conduct aperture photometry of variable stars and generate time-series data. Built with Astropy for easy use in introductory photometry courses.',
      language: 'Python',
      link: 'https://github.com/chandraskappagantula/PhotometryPipelineEVCResearchCourse',
      featured: true,
    },
    {
      title: 'Photometry_RRLyrae',
      description: 'Program for NGVS and HSC RR Lyrae exposure analysis and light curve generation. Created for the SigmaXi research competition.',
      language: 'Python',
      link: 'https://github.com/chandraskappagantula/Photometry_RRLyrae',
      featured: true,
    },
    {
      title: 'CalendarAppTkinter',
      description: 'A personal calendar app with productivity manager features, task and schedule management, and Spotify integration.',
      language: 'Python',
      link: 'https://github.com/chandraskappagantula/CalendarAppTkinter',
    },
    {
      title: 'LogfileAnalysis',
      description: 'GUI program to analyze multi-threaded system log files, streamlining troubleshooting and improving debugging efficiency.',
      language: 'Python',
      link: 'https://github.com/chandraskappagantula/LogfileAnalysis',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 section-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Projects & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From astronomical pipelines to productivity tools, here are some of the 
            projects I've built to solve real problems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card-gradient rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 ${
                project.featured ? 'glow-accent' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <Star className="h-4 w-4 text-primary fill-primary" />
                  )}
                  <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {project.language}
                  </span>
                </div>
                <Button variant="ghost" size="icon" asChild className="opacity-50 group-hover:opacity-100 transition-opacity">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/chandraskappagantula" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
