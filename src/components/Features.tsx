import { Card, CardContent } from "@/components/ui/card";
import appPreviewImage from "@/assets/app-preview.jpg";
import cardsFeatureImage from "@/assets/cards-feature.jpg";
import crystalBallImage from "@/assets/crystal-ball.jpg";

const Features = () => {
  const features = [
    {
      title: "Ежедневные расклады",
      description: "Получайте персональные предсказания каждый день с помощью традиционных раскладов таро",
      image: cardsFeatureImage,
      icon: "🔮"
    },
    {
      title: "Интуитивный интерфейс",
      description: "Простое и красивое приложение, которое делает чтение таро доступным для всех",
      image: appPreviewImage,
      icon: "📱"
    },
    {
      title: "Глубокие интерпретации",
      description: "Подробные толкования карт с советами для вашей жизни, любви и карьеры",
      image: crystalBallImage,
      icon: "✨"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
            Особенности приложения
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Современные технологии встречаются с древней мудростью для создания уникального опыта
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-mystical-purple/20 hover:border-mystical-purple/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="w-full h-48 mb-6 rounded-lg bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${feature.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-mystical-purple transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;