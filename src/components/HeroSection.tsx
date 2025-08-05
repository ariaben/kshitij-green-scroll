import { Button } from "@/components/ui/button";
import heroFactory from "@/assets/hero-factory.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10s] ease-out hover:scale-110"
        style={{
          backgroundImage: `url(${heroFactory})`,
        }}
      />
      <div className="absolute inset-0 gradient-hero opacity-85" />
      
      {/* Circular Motifs */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary-light/20 animate-pulse" />
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-primary/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Fueling Progress,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
            Sustainably
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Delivering high-performance biomass pellets for modern industries
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-white text-primary hover:bg-green-50 text-lg px-8 py-4 rounded-full shadow-strong transition-bounce hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Enquire Now
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;