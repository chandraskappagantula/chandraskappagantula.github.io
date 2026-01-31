import { ExternalLink, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchItems = [
    {
      title: 'Active Galactic Nuclei Research',
      institution: 'Cal Poly SLO',
      period: 'Current',
      description: 'Studying IFU spectroscopy of megamaser disk galaxies to understand the energetic processes in galaxy centers.',
      highlight: true,
    },
    {
      title: 'RR Lyrae Pulsating Variables',
      institution: 'UC Santa Cruz',
      advisors: 'Yuting Feng & Raja Guhathakurta',
      period: 'Previous',
      description: 'Researched RR Lyrae stars as distance indicators. This work was published and presented at the AAS 245 Winter Conference.',
      published: true,
      icon: Award,
    },
    {
      title: 'Differential Photometry Pipeline',
      institution: 'Evergreen Valley College',
      period: 'Previous',
      description: 'Developed a comprehensive photometry pipeline for time-series data analysis, designed to be used by students in a new research course.',
      link: 'https://github.com/chandraskappagantula/PhotometryPipelineEVCResearchCourse',
    },
  ];

  return (
    <section id="research" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Research Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Scientific Contributions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From stellar variability to galactic nuclei, my research journey spans 
            multiple institutions and fascinating cosmic phenomena.
          </p>
        </div>

        {/* Research timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {researchItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 mt-6 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`card-gradient rounded-xl p-6 ${item.highlight ? 'glow-primary' : ''}`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {item.published && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                        Published
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary text-sm mb-1">{item.institution}</p>
                  {item.advisors && (
                    <p className="text-muted-foreground text-sm mb-3">
                      Advisors: {item.advisors}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
