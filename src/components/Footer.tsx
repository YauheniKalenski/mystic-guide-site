const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-comfort-sage/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-comfort rounded-full"></div>
            <h3 className="text-xl font-bold bg-gradient-comfort bg-clip-text text-transparent">
              Aura Tarot
            </h3>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-foreground/60">
            <a href="/privacy" className="hover:text-comfort-sage transition-colors">
              Privacy Policy
            </a>
            <a href="/account-deletion" className="hover:text-comfort-sage transition-colors">
              Account Deletion
            </a>
            <a href="#" className="hover:text-comfort-sage transition-colors">
              Support
            </a>
          </div>
        </div>
        
        <div className="border-t border-comfort-sage/20 mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © 2024 Aura Tarot. All rights reserved. Discover your inner wisdom with gentle tarot guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;