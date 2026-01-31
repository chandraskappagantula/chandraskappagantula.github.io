import { Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Personal Email',
      value: 'chandraskappagantula@gmail.com',
      href: 'mailto:chandraskappagantula@gmail.com',
      icon: Mail,
    },
    {
      label: 'Academic Email',
      value: 'ckappaga@calpoly.edu',
      href: 'mailto:ckappaga@calpoly.edu',
      icon: Send,
    },
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/chandrasekhar-kappagantula-a6315b231/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'chandraskappagantula',
      href: 'https://github.com/chandraskappagantula',
      icon: Github,
    },
    {
      label: 'Astrophotography',
      value: '@chans_astrophotozz',
      href: 'https://www.instagram.com/chans_astrophotozz/',
      icon: Instagram,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to collaborations, research opportunities, and learning new things. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="card-gradient rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-2xl p-8 md:p-12 glow-primary">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether it's research, astrophotography, or building cool things together, 
              I'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:chandraskappagantula@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
