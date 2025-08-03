import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent animate-glow">
            Раскройте тайны
            <br />
            вашего будущего
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Откройте для себя древнюю мудрость таро в современном мобильном приложении. 
            Получите персональные предсказания и советы каждый день.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-mystical hover:opacity-90 text-white font-semibold px-8 py-4 text-lg animate-float"
              asChild
            >
              <a href="#download">
                Скачать в Google Play
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white px-8 py-4 text-lg"
              asChild
            >
              <a href="#features">
                Узнать больше
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-mystical-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-mystical-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;