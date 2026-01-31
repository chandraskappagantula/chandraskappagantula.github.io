import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
