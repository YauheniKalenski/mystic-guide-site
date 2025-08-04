import { Button } from "@/components/ui/button";
import heroImage from "@/assets/peaceful-hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
            Discover Your
            <br />
            Inner Wisdom
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Connect with your intuition through thoughtful tarot guidance. 
            Find clarity, self-understanding, and peaceful insights for your journey.
          </p>
          
          <div className="flex justify-center mb-8">
            <a 
              href="https://play.google.com/store/search?q=aura%20tarot&c=apps"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                alt="Get it on Google Play" 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                className="h-16"
              />
            </a>
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm">
              Developed in collaboration with a professional tarot reader
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;