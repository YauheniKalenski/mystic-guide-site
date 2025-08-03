import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-mystical-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-mystical rounded-full animate-glow"></div>
          <h1 className="text-2xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
            Mystic Tarot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-mystical-purple transition-colors">
            Особенности
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-mystical-purple transition-colors">
            Как работает
          </a>
          <a href="#download" className="text-foreground hover:text-mystical-purple transition-colors">
            Скачать
          </a>
        </nav>

        <Button 
          asChild
          className="bg-gradient-mystical hover:opacity-90 text-white font-semibold"
        >
          <a href="#download">
            Скачать приложение
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;