import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import sungirl from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Если мы на главной странице, просто прокручиваем
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную с якорем
      navigate(`/#${sectionId}`);
    }
  };

  const goToHome = () => {
    if (location.pathname === '/') {
      // Если уже на главной, прокручиваем к верху
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Если на другой странице, переходим на главную
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-comfort-sage/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={goToHome}>
          <img 
            src={sungirl} 
            alt="Aura Tarot Logo" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold bg-gradient-comfort bg-clip-text text-transparent">
            Aura Tarot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-comfort-sage transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-foreground hover:text-comfort-sage transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <a href="#/privacy" className="text-foreground hover:text-comfort-sage transition-colors">
            Privacy
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;