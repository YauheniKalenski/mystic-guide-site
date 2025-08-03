import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
            Начните свое мистическое путешествие
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже открыли для себя мудрость таро
          </p>

          <Card className="bg-card/50 border-mystical-purple/20 p-8 mb-12">
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-mystical-purple mb-2">4.8</div>
                  <div className="text-sm text-foreground/80">Рейтинг в магазине</div>
                  <div className="flex justify-center mt-2">
                    {"⭐".repeat(5)}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-mystical-purple mb-2">50K+</div>
                  <div className="text-sm text-foreground/80">Скачиваний</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-mystical-purple mb-2">1000+</div>
                  <div className="text-sm text-foreground/80">Отзывов</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-mystical hover:opacity-90 text-white font-semibold px-12 py-6 text-xl animate-glow"
                  asChild
                >
                  <a 
                    href="https://play.google.com/store/apps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Скачать в Google Play
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-foreground/60 text-sm">
              Бесплатная загрузка • Работает на Android 5.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;