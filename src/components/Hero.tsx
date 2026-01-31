import { Github, Linkedin, Instagram, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="gradient-text">Chandrasekhar</span>
          <br />
          <span className="text-foreground">Kappagantula</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Physics student at Cal Poly SLO, researching the cosmos through 
          <span className="text-primary"> Active Galactic Nuclei</span> and 
          <span className="text-accent"> stellar variability</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
            <a href="https://github.com/chandraskappagantula" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
            <a href="https://www.linkedin.com/in/chandrasekhar-kappagantula-a6315b231/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
            <a href="https://www.instagram.com/chans_astrophotozz/" target="_blank" rel="noopener noreferrer" aria-label="Astrophotography Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:border-primary hover:text-primary transition-colors">
            <a href="mailto:chandraskappagantula@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Button size="lg" className="glow-primary" asChild>
            <a href="#research">View Research</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
