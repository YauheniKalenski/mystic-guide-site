import { Card, CardContent } from "@/components/ui/card";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
            Start Your Journey of Self-Discovery
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have found peace, clarity, and personal growth through mindful tarot guidance
          </p>

          <div className="text-center">
            <p className="text-foreground/60 text-sm">
              Free download • Works on Android 5.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;