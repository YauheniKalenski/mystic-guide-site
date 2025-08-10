const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get Aura Tarot for free and begin your journey of self-discovery"
    },
    {
      number: "02", 
      title: "Set Your Intention",
      description: "Take a moment to center yourself and reflect on what guidance you're seeking"
    },
    {
      number: "03",
      title: "Choose Your Cards",
      description: "Trust your intuition as you select cards that resonate with your inner wisdom"
    },
    {
      number: "04",
      title: "Reflect & Grow",
      description: "Receive thoughtful insights and take time to contemplate their meaning for your path"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Four simple steps to connect with your inner wisdom and find peaceful guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-6 rounded-xl bg-card/30 border border-comfort-sage/20 hover:border-comfort-sage/40 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-comfort rounded-full flex items-center justify-center text-white font-bold text-xl">
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