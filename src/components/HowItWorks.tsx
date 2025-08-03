const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Скачайте приложение",
      description: "Установите Mystic Tarot из Google Play Store бесплатно"
    },
    {
      number: "02", 
      title: "Задайте вопрос",
      description: "Сосредоточьтесь на том, что вас беспокоит, и задайте вопрос картам"
    },
    {
      number: "03",
      title: "Выберите карты",
      description: "Интуитивно выберите карты из колоды для вашего расклада"
    },
    {
      number: "04",
      title: "Получите ответ",
      description: "Получите детальную интерпретацию и советы для вашей ситуации"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
            Как это работает
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Четыре простых шага к раскрытию тайн вашей судьбы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-6 rounded-xl bg-card/30 border border-mystical-purple/20 hover:border-mystical-purple/40 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-mystical rounded-full flex items-center justify-center text-white font-bold text-xl animate-glow">
                    {step.number}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;