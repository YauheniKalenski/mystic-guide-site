import { Card, CardContent } from "@/components/ui/card";
import sungirlImage from "@/assets/sungirl.webp";
import readgirlImage from "@/assets/readgirl.webp";
import spreadResultGirlImage from "@/assets/spread_result_girl.webp";

const Features = () => {
  const features = [
    {
      title: "Daily Reflections",
      description: "Start each day with gentle guidance and thoughtful card interpretations for personal growth",
      image: sungirlImage
    },
    {
      title: "Learn Tarot",
      description: "Master the art of tarot reading with comprehensive lessons, card meanings, and practical exercises",
      image: readgirlImage
    },
    {
      title: "Mindful Insights",
      description: "Thoughtful interpretations focused on self-understanding, growth, and inner peace",
      image: spreadResultGirlImage
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
            App Features
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Designed to support your journey of self-discovery with gentle wisdom and mindful guidance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-comfort-sage/20 hover:border-comfort-sage/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="w-full h-48 mb-6 rounded-lg bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${feature.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-comfort-sage transition-colors">
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