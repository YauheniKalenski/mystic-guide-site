import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-comfort-sage/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-comfort rounded-full"></div>
          <h1 className="text-2xl font-bold bg-gradient-comfort bg-clip-text text-transparent">
            Aura Tarot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-comfort-sage transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-comfort-sage transition-colors">
            How it Works
          </a>
          <a href="#download" className="text-foreground hover:text-comfort-sage transition-colors">
            Download
          </a>
        </nav>

        <Button 
          asChild
          className="bg-gradient-comfort hover:opacity-90 text-white font-semibold"
        >
          <a href="#download">
            Download App
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;