
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Simplified version after all changes
const Hero = () => {
  const handleConsultClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-10 relative bg-primary"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#000e1a] z-0"></div>
      
      <div className="container mx-auto flex flex-col items-center justify-center z-10 px-6">
        <div className="w-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            NEXORA
            <span className="block text-secondary mt-4">INNOVATING THE NEXT ERA OF TECH</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-roboto mb-8 text-gray-200">
            MVP • Web & Mobile Apps • AI/ML • Analytics • Video & Content
          </h2>
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-primary text-lg py-6 px-8 mx-auto"
            size="lg"
            onClick={handleConsultClick}
          >
            Get a Free Consult
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
