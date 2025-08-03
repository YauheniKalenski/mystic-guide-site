const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-mystical-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-mystical rounded-full animate-glow"></div>
            <h3 className="text-xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              Mystic Tarot
            </h3>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-mystical-purple transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-mystical-purple transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-mystical-purple transition-colors">
              Поддержка
            </a>
          </div>
        </div>
        
        <div className="border-t border-mystical-purple/20 mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © 2024 Mystic Tarot. Все права защищены. Раскройте свое будущее с мудростью таро.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;